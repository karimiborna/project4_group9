import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask
import joblib
import pickle
import sklearn
import tensorflow as tf
from sklearn.metrics import classification_report

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route("/manual_nn", methods = ['POST'])
def predict():
    neural_network_model = tf.keras.models.load_model('../Neural_Network/Resources/manual_model.h5')
    #array = request.form['form_name']
    #predictions = model.predict(array)
    return (
        
    )

@app.route("/log_res", methods = ['POST'])
def predict():
    logistic_resampled_model = joblib.load('../Logistic_Regression/Resources/model_resampled.pkl')
    return (
        f"Available Routes:<br/>"
    )

@app.route("/log", methods = ['POST'])
def predict():
    logistic_model = joblib.load('../Logistic_Regression/Resources/pickle_model.pkl')
    return (
        f"Available Routes:<br/>"
    )

@app.route("/rf", methods = ['POST'])
def predict():
    random_forest_model = joblib.load('../Random_Forest/Resources/random_forest.pickle')
    return (
        f"Available Routes:<br/>"
    )

@app.route("/auto_nn", methods = ['POST'])
def predict():
    auto_neural_network_model = tf.keras.models.load_model('../Neural_Network/Resources/auto_model.h5')
    return (
        f"Available Routes:<br/>"
    )

@app.route("/knn", methods = ['POST'])
def predict():
    knn_model = joblib.load('../KNN/Resources/knn_model.pickle')
    return (
        f"Available Routes:<br/>"
    )

if __name__ == '__main__':
    app.run(debug=True)