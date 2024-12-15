---
layout: default
title: "SARteam"
---

# Introduction

For over a century, cinema has played a pivotal role in shaping societal perceptions and cultural narratives.
Yet, while the industry has seen technological and creative advancements, the representation of women has remained trapped in
archaic stereotypes. Actresses have often been assigned to secondary roles, limited by narrow character tropes and overshadowed by their male counterparts.
<br>
Through this analysis, we’re here to empower you to create a blockbuster that doesn’t just shine at the box office but also sets a new standard for equality in cinema. We'll guide you through the key ingredients for crafting a film that is as inclusive as it is successful.
Because while inclusivity is the mission, success is the name of the game and our recommendations are designed to deliver both. So, let’s pull back the curtain on the current industry landscape and explore the challenges that stand between you and a truly groundbreaking, inclusive film.

# Behind the curtain: The current state of women in cinema

<div style="display: flex; justify-content: center; align-items: center; margin: 60px auto; max-width: 1000px;">

  <!-- Text Section -->
  <div style="flex: 1; padding-right: 40px; max-width: 50%; display: flex; align-items: center;">
    <p style="line-height: 1.8; font-size: 1.2em; margin: 0;">
      To truly understand the challenges women face in the film industry, we must first examine the current landscape.
      <br>
      This visualization highlights the current gender distribution in cinema, underscoring the imbalance that persists. 
      As expected, a significant difference is observed in the number of actors between men and women. Here, men represent 
      66.18% of the actors, while women account for 33.82%. Now, the question is: even if women have always been 
      underrepresented in cinema since its inception, has their representation increased over the years?
    </p>
  </div>
  <!-- gender distribution -->
  <div style="flex: 1; max-width: 50%; display: flex; justify-content: center;">
    <iframe src="assets/gender_distribution.html" width="100%" height="430px" style="border: none;"></iframe>
  </div>
</div>

<div style="display: flex; justify-content: center; align-items: center; margin: 60px 0;">
  <!-- gender distribution over the year -->
  <div style="width: 100%; max-width: 1000px; text-align: center;">
    <iframe src="assets/gender_distribution_years.html" width="100%" height="600px" style="border: none;"></iframe>
  </div>
</div>

<div style="display: flex; justify-content: center; align-items: center; margin: 60px 0;">
  <!-- Actor ratio per movie over the years -->
  <div style="width: 100%; max-width: 1000px; text-align: center;">
    <iframe src="assets/actor_ratio_per_movie.html" width="100%" height="600px" style="border: none;"></iframe>
  </div>

</div>

<div style="display: flex; justify-content: center; align-items: center; margin: 60px 0;">
  <!-- pourcentage women by genre -->
  <div style="width: 100%; max-width: 1000px; text-align: center;">
    <iframe src="assets/pourcentage_women_by_genre.html" width="100%" height="600px" style="border: none;"></iframe>
  </div>

</div>

## Top Tropes for Women and Men in Cinema

Understanding the most common character tropes for women and men in cinema provides insight into how gender roles have been historically depicted. The visualizations below highlight the top tropes for female and male characters.

### Top Tropes for Women

<div style="display: flex; justify-content: center; align-items: center; margin: 40px auto; max-width: 1000px;">
  <div style="flex: 1; max-width: 100%; text-align: center;">
    <iframe src="assets/top_tropes_women.html" width="100%" height="500px" style="border: none;"></iframe>
  </div>
</div>

### Top Tropes for Men

<div style="display: flex; justify-content: center; align-items: center; margin: 40px auto; max-width: 1000px;">
  <div style="flex: 1; max-width: 100%; text-align: center;">
    <iframe src="assets/top_tropes_men.html" width="100%" height="500px" style="border: none;"></iframe>
  </div>
</div>

# The Bechdel Score

<br />
<br />

# The Inclusivity Score

<br />
<br />

**SAR team:** Okay, this Bechdel Test is very interesting. However, if you create a movie with the intent of achieving a Bechdel score of 3, this is very easy. You just need to hire two women and write a two-line dialogue about something unrelated to men. Therefore, we aim to create a more meaningful metric to evaluate whether a movie is truly inclusive.<br><br>

The Bechdel score provides a solid foundation for developing an inclusivity metric. To build on this, we also evaluate the proportion of actresses in the movie to assess the level of female representation. However, this alone is insufficient. A movie may feature many women in minor or background roles, or conversely, a single actress who takes on the lead role. Therefore, we also consider the share of the script attributed to actresses to capture their meaningful presence in the film.<br>
Indeed, looking at the distribution of the script in the figure below provided by [The Pudding](https://pudding.cool/2017/03/film-dialogue/). Only 24% of movies show an equal dialogue distribution between women and men!

<br>
<div style="width: 100%; height: 100vh; overflow: hidden;">
  <iframe src='https://pudding.cool/2017/03/film-dialogue/embed.html' frameborder='0' style="width: 110%; height: 110%; border: none;"></iframe>
</div>

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

**Producer:** This Inclusivity score is a good idea, but I have done some research. Look, movies with high success scores all have very poor representation ratings. I want to help the film industry become more equitable, but I don’t want my movie to fail.

{% include movie_dashboard.html %}

<br />
Indeed, when examining movies ranked by either their inclusivity or their success, we observe a potential negative correlation between inclusivity and success. Specifically, less inclusive movies appear to be more successful compared to their more inclusive counterparts. However, conducting both Pearson and Spearman correlation analyses provides a reassuring perspective, as the results indicate only a weak negative correlation. The Pearson correlation coefficient is -0.125 (p-value = 6.82e-05), and the Spearman correlation coefficient is -0.126 (p-value = 6.33e-05). While the low p-values indicate the results are statistically significant, the correlation coefficients are close to zero, signifying a very weak association. This suggests no meaningful evidence of inclusivity negatively impacting a movie's success.

<br />

**SAR team:** You can be reassured, if your movie is good, prioritizing inclusivity will not harm its success. However, there is still significant progress to be made before inclusivity becomes the norm in movie industry. While we would expect that inclusivity positively contributes to a movie’s success, we are far from it. Achieving this will require continued efforts, such as better representation of women in storytelling and active advocacy within the industry.

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

<!-- Search Widget -->
<div class="search-widget">
  <label for="searchInput">Search your favourite movie:</label>
  <input type="text" id="searchInput" placeholder="Type a movie title...">
  <div id="resultContainer">
    <!-- Results will be displayed here -->
  </div>
</div>
<script src="/SAR-ADA_website/search_engine/search.js"></script>
<br />
<br />
<br />
<br />
