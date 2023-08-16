import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, render_template
import joblib
import pickle
import sklearn
import tensorflow as tf
from sklearn.metrics import classification_report
from flask import request
from sklearn.preprocessing import StandardScaler

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

    newArray = [age,restingBP,chol,fastBS,maxHR,oldPeak]

    if sex == 'F':
        newArray.append(1,0)
    else:
        newArray.append(0,1)

    if chestPain == "ASY":
        newArray.append(1,0,0,0)
    elif chestPain == "ATA":
        newArray.append(0,1,0,0)
    elif chestPain == "NAP":
        newArray.append(0,0,1,0)
    else:
        newArray.append(0,0,0,1)

    if restECG == "LVH":
        newArray.append(1,0,0)
    elif restECG == "Normal":
        newArray.append(0,1,0)
    else:
        newArray.append(0,0,1)
    
    if exerAng == "N":
        newArray.append(1,0)
    else:
        newArray.append(0,1)
    
    if slope == "Down":
        newArray.append(1,0,0)
    elif slope == "Flat":
        newArray.append(0,1,0)
    else:
        newArray.append(0,0,1)

    Scaler = StandardScaler()
    x_data = Scaler.fit(newArray)
    x_data_scaled = x_data.transform(newArray)

    print(newArray)


#################################################
# Flask Setup
#################################################
app = Flask(__name__)
# app.run(host='127.0.0.1', port=5000)
#################################################
# Flask Routes
#################################################

@app.route("/manual_nn", methods = ['POST'])
def manual_nn():
    # neural_network_model = tf.keras.models.load_model('../Neural_Network/Resources/manual_model.h5')
    getData()
    #predictions = model.predict(array)
    return (
        
    )

@app.route("/log_res", methods = ['POST'])
def log_res():
    logistic_resampled_model = joblib.load('../Logistic_Regression/Resources/model_resampled.pkl')
    return (
        f"Available Routes:<br/>"
    )

@app.route("/log", methods = ['POST'])
def log():
    logistic_model = joblib.load('../Logistic_Regression/Resources/pickle_model.pkl')
    return (
        f"Available Routes:<br/>"
    )

@app.route("/rf", methods = ['POST'])
def rf():
    random_forest_model = joblib.load('../Random_Forest/Resources/random_forest.pickle')
    return (
        f"Available Routes:<br/>"
    )

@app.route("/auto_nn", methods = ['POST'])
def auto_nn():
    auto_neural_network_model = tf.keras.models.load_model('../Neural_Network/Resources/auto_model.h5')
    return (
        f"Available Routes:<br/>"
    )

@app.route("/knn", methods = ['POST'])
def knn():
    knn_model = joblib.load('../KNN/Resources/knn_model.pickle')
    return (
        f"Available Routes:<br/>"
    )

@app.route("/")
def home():
    # return render_template("index.html")
    getData()


if __name__ == '__main__':
    app.run(debug=True)