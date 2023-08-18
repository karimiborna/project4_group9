# Project 4 Group 9

## Overview
The purpose of this project was to design a machine learning system that could predict important health information.  For this project we chose heart disease.  We found a Kaggle dataset of patient information with several different measures of health such as blood pressure, heart rate, and cholesterol levels along with the target column of heart disease.  We then created a Tableau dashboard to visualize the data that we were analyzing.  We created several different models and tested the models to see which were the most accurate in predicting heart disease and created a Tableau dashboard to visualize the difference between the models.  Finally, we created a dashboard that can use the different machine learning models to predict an outcome in real time.  To present our work, we created a powerpoint detailing everything we did and our processes which can be found at the following link:
https://docs.google.com/presentation/d/1s6uxhdwydbZChxGub0kEmHp-Nz98SAjJxXRnfNaBgjU/edit?usp=sharing

## Data Information
https://www.kaggle.com/datasets/fedesoriano/heart-failure-prediction
<img width="860" alt="Screenshot 2023-08-18 at 13 02 25" src="https://github.com/karimiborna/project4_group9/assets/120141110/75b79bfe-512b-44aa-b75e-3d99c551f7cd">
</br> Contains 918 rows of patient information from Cleveland, Hungary, Switzerland, and Long Beach collected in 1988 from the UC Irvine Machine Learning Repository.  We loaded the data into pgAdmin and also used SQLAlchemy to create a dataframe. We also created a dashboard to visualize various aspects of the data when compared to the target column, Heart Disease, to see what measures of the data the machine learning models would be using in the predictions with the red color indicating the presence of heart disease.
![DataDashboard](https://github.com/karimiborna/project4_group9/assets/120141110/a0171964-075c-431e-9647-f5cd439129c0)

## Model Prediction
We used several different types of models to predict Heart Disease.  We used K-Nearest Neigbors, Logistic Regression, Neural Network, and Random Forest.  For the Logistic Regression, we also used Random Resampling to test if resampling to balance the gender difference would improve accuracy.  We also used an auto and a manual Neural Network.  We gathered the accuracy of these models and put them in a CSV to to use in Tableau to compare them.  The KNN model was the most accurate at 87.8%.
![model_comparison_dashboard](https://github.com/karimiborna/project4_group9/assets/120141110/583c6c01-7d55-437f-be49-835ea4cd156f)

## Dashboard
We also created a dashboard that takes random data created by the dashboard where the user then can select which model they want to use to predict Heart Disease using the randomly generated data.  We used a flask app to connect to our pgAdmin database and use the data from the database to run the model predictions.  We created a new array of the data we recieved from the dahboard and pushed it to our models with an outcome HTML page based on the model prediction of either positive or negative.
<img width="1401" alt="Screenshot 2023-08-18 at 13 50 36" src="https://github.com/karimiborna/project4_group9/assets/120141110/8986baf6-6f4b-423d-964f-96bf392b657a">



