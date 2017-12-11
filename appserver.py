from flask import Flask,render_template
from controller import timeline
import json


app=Flask(__name__,static_folder='build',template_folder='./')


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/timeline')
def timeline():
    act=timeline()
    return json.dumps(act)

if __name__=="__main__":
    app.run(debug=True)