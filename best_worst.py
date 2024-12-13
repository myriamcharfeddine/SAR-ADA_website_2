import dash
from dash import dcc, html
from dash.dependencies import Input, Output

# Sample movie data
movies = [
    {"name": "Best Movie", "score": 95, "characteristics": "Highly acclaimed, great story, amazing acting."},
    {"name": "Middle Movie", "score": 50, "characteristics": "Average reception, decent storyline."},
    {"name": "Worst Movie", "score": 10, "characteristics": "Poor reviews, lackluster performance."},
]

# Dash app setup
app = dash.Dash(__name__)

app.layout = html.Div([
    dcc.Slider(
        id='score-slider',
        min=0,
        max=100,
        step=1,
        value=50,
        marks={movie['score']: movie['name'] for movie in movies},
    ),
    html.Div(id='movie-info', style={'marginTop': '20px'})
])

@app.callback(
    Output('movie-info', 'children'),
    [Input('score-slider', 'value')]
)
def update_movie_info(value):
    movie = min(movies, key=lambda x: abs(x['score'] - value))
    return html.Div([
        html.H2(movie['name']),
        html.P(f"Score: {movie['score']}"),
        html.P(movie['characteristics']),
    ])

if __name__ == '__main__':
    app.run_server(debug=True)
