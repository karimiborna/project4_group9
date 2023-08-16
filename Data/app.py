import datetime
import sqlalchemy
import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify
from flask_cors import CORS

#def stock_dictionary():
#################################################
# Database Setup
#################################################
engine = create_engine(f"postgresql+psycopg2://postgres:Green!Bird00@localhost:5433/final_project")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# Create our session (link) from Python to the DB
session = Session(engine)

################################################
heart_data_list = []
heart_data = engine.execute("SELECT * FROM heart_failure")
for results in heart_data:
    heart_dict = {}
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
    heart_data_list.append(heart_dict)
session.close()
# heart_pd = pd.DataFrame(heart_data_list)