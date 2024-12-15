---
layout: default
title: "SARteam"
---

# Introduction

<!-- Search Widget -->
<div class="search-widget">
  <label for="searchInput">Search your favourite movie:</label>
  <input type="text" id="searchInput" placeholder="Type a movie title...">
  <div id="resultContainer">
    <!-- Results will be displayed here -->
  </div>
</div>

<script src="/SAR-ADA_website/search_engine/search.js"></script>


# The Bechdel Score


<!-- {% include movie_dashboard.html %} -->


<br />
<br />

# The Inclusivity Score

<br />
<br />


**SAR team:**  Okay, this Bechdel Test is very interesting. However, if you create a movie with the intent of achieving a Bechdel score of 3, this is very easy. You just need to hire two women and write a two-line dialogue about something unrelated to men. Therefore, we aim to create a more meaningful metric to evaluate whether a movie is truly inclusive.<br><br>

The Bechdel score provides a solid foundation for developing an inclusivity metric. To build on this, we also evaluate the proportion of actresses in the movie to assess the level of female representation. However, this alone is insufficient. A movie may feature many women in minor or background roles, or conversely, a single actress who takes on the lead role. Therefore, we also consider the share of the script attributed to actresses to capture their meaningful presence in the film.<br><br>

Thus, the inclusivity score is calculated as follows:<br><br>

$$
\text{Inclusivity Score} = \frac{\text{Normalized Bechdel Score} + \text{Promotion of Actress} + \text{Women’s Share of the Script}}{3}
$$  

<br>

1. **Normalized Bechdel Score**: The traditional Bechdel score scaled to ensure compatibility with other metrics.<br>

2. **Promotion of Actress**: The proportion of actresses in the movie compared to actors.<br>

3. **Women’s Share of the Script**: The percentage of the script allocated to female characters.<br><br>

This approach ensures a more comprehensive and meaningful evaluation of inclusivity in movies, moving beyond the simplicity of the Bechdel Test.

<br />

<div style="width: 100%; height: 100vh; overflow: hidden;">
  <iframe src='https://pudding.cool/2017/03/film-dialogue/embed.html' frameborder='0' style="width: 110%; height: 110%; border: none;"></iframe>
</div>

<br />
<br />

# The Success Metric

**Producer:** Okay, this is nice. I guess we will succeed in making an inclusive movie. However, I am concerned that it might affect the success of my movie…
<br />
<br />
Defining what constitutes the success of a movie is not an easy task. Naturally, we want the movie to generate as much revenue as possible, but we also consider it equally important for the movie to be appreciated by the audience. To capture this balance, we introduce a success metric:

$$
\text{Net Box Office Revenue} = \text{Box Office Revenue} - \text{Initial Budget}
$$

$$
\text{Success Metric} = a_1 \cdot \text{rank}(\text{Net Box Office Revenue}) + a_2 \cdot \text{rank}(\text{Rating})
$$

Here, $$a_1$$ and $$a_2$$ are constants. In this case, we set $$a_1= a_2 = 0.5$$, as we consider both rating and revenue equally important. However, if someone wanted to prioritize either revenue or rating, the constants could be adjusted accordingly.
<br />
<br />
Using the rank of revenue and rating ensures equal weighting between the two metrics, even if the revenue values are significantly large. For example, a movie with the highest revenue in the dataset will have $$\text{rank}(\text{Net Box Office Revenue}) = 1$$. However, if it is the lowest-rated movie, regardless of how large its revenue is $$\text{rank}(\text{Rating}) = 0$$ In this case, the success metric would be of 0.5. This ranking approach prevents the success metric from being disproportionately influenced by very high revenue figures, ensuring that both factors contribute fairly to the final score.
<br />
<br />
<br />
<br />

