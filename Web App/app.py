import numpy as np
import sqlalchemy
import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, text
from flask import Flask, render_template
import joblib
import pickle
import sklearn
import tensorflow as tf
from flask import request
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier

engine = create_engine(f"postgresql+psycopg2://postgres:Bornak632@localhost:5432/final_project")
conn = engine.connect()
Base = automap_base()
Base.prepare(autoload_with=engine)
session = Session(engine)

heart_data_list = []
heart_data = conn.execute(text(""" SELECT * FROM heart_failure """))
for results in heart_data:
    heart_failure = {}
    heart_failure["age"] = results[0]
    heart_failure["sex"] = results[1]
    heart_failure["chest_pain_type"] = results[2]
    heart_failure["resting_bp"] = results[3]
    heart_failure["cholesterol"] = results[4]
    heart_failure["fasting_bs"] = results[5]
    heart_failure["resting_ecg"] = results[6]
    heart_failure["max_hr"] = results[7]
    heart_failure["exercise_aniga"] = results[8]
    heart_failure["old_peak"] = results[9]
    heart_failure["st_slope"] = results[10]
    heart_failure["heart_disease"] = results[11]
    heart_data_list.append(heart_failure)
session.close()
heart_df = pd.DataFrame(heart_data_list)

dummies = pd.get_dummies(heart_df)

y = dummies["heart_disease"]
X = dummies.drop(columns=["heart_disease"])

def getData():
    age = request.form.get('hidden-age')
    sex = request.form.get('hidden-sex')
    chestPain = request.form.get('hidden-chest-pain')
    restingBP = request.form.get('hidden-resting-BP')
    chol = request.form.get('hidden-chol')
    fastBS = request.form.get('hidden-fast-BS')
    restECG = request.form.get('hidden-rest-ECG')
    maxHR = request.form.get('hidden-max-HR')
    exerAng = request.form.get('hidden-exer-ang')
    oldPeak = request.form.get('hidden-oldpeak')
    slope = request.form.get('hidden-slop-ST')

    newArray = [int(age),int(restingBP),int(chol),int(fastBS),int(maxHR),float(oldPeak),]

    if sex == 'F':
        numbers = [1,0]
        newArray.extend(numbers)
    else:
        numbers = [0,1]
        newArray.extend(numbers)

    if chestPain == "ASY":
        numbers = [1,0,0,0]
        newArray.extend(numbers)
    elif chestPain == "ATA":
        numbers = [0,1,0,0]
        newArray.extend(numbers)
    elif chestPain == "NAP":
        numbers = [0,0,1,0]
        newArray.extend(numbers)
    else:
        numbers = [0,0,0,1]
        newArray.extend(numbers)

    if restECG == "LVH":
        numbers = [1,0,0]
        newArray.extend(numbers)
    elif restECG == "Normal":
        numbers = [0,1,0]
        newArray.extend(numbers)
    else:
        numbers = [0,0,1]
        newArray.extend(numbers)
    
    if exerAng == "N":
        numbers = [1,0]
        newArray.extend(numbers)
    else:
        numbers = [0,1]
        newArray.extend(numbers)
    
    if slope == "Down":
        numbers = [1,0,0]
        newArray.extend(numbers)
    elif slope == "Flat":
        numbers = [0,1,0]
        newArray.extend(numbers)
    else:
        numbers = [0,0,1]
        newArray.extend(numbers)

    

    newArray = np.array(newArray)
    dataArray = newArray.reshape(2,10)

    return(dataArray)

def predictData(data, model, model_type):
    
    inputdata = data.reshape(1,20)

    Scaler = StandardScaler()
    X_Scaler = Scaler.fit(X)
    X_scaled = X_Scaler.transform(X)
    inputdata_scaled = X_Scaler.transform(inputdata)

    if model_type == 'sk':
        outputModel = model.fit(X_scaled,y)
        predictions = outputModel.predict(inputdata_scaled)

    else:
        outputModel = model
        predictions = outputModel.predict(X)

    

    return(predictions)

def checkHR():

    maxHR = request.form.get('hidden-max-HR')

    return(maxHR)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
#################################################
# Flask Routes
#################################################

@app.route("/manual_nn", methods = ['POST'])
# this will not work yet
def manual_nn():
    model = tf.keras.models.load_model('../Neural_Network/Resources/manual_model.h5')
    model_type = 'nn'
    data = getData()
    user = predictData(data, model, model_type)
    return (
        f'{user}'
    )

@app.route("/log_res", methods = ['POST'])
def log_res():
    model = joblib.load('../Logistic_Regression/Resources/model_resampled.pkl')
    model_type = 'sk'
    data = getData()
    user = predictData(data, model, model_type)
    return (
        f'{user}'
    )

@app.route("/log", methods = ['POST'])
def log():
    model = joblib.load('../Logistic_Regression/Resources/pickle_model.pkl')
    model_type = 'sk'
    data = getData()
    user = predictData(data, model, model_type)
    return (
        f'{user}'
    )

@app.route("/rf", methods = ['POST'])
def rf():
    model = joblib.load('../Random_Forest/Resources/random_forest.pickle')
    model_type = 'sk'
    data = getData()
    user = predictData(data, model, model_type)
    return (
        f'{user}'
    )

@app.route("/auto_nn", methods = ['POST'])
def auto_nn():
    model = tf.keras.models.load_model('../Neural_Network/Resources/auto_model.h5')
    model_type = 'nn'
    data = getData()
    user = predictData(data, model, model_type)
    return (
        f'{user}'
    )

@app.route("/knn", methods = ['POST'])
def knn():
    model = joblib.load('../KNN/Resources/knn_model.pickle')
    model_type = 'sk'
    data = getData()
    user = predictData(data, model, model_type)
    return (
        f'{user}'
    )

@app.route("/")
def home():
    return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=True)