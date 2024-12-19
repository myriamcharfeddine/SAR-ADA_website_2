---
layout: default
title: "SARteam"
---

<!-- The letter displayed initially -->
<div id="initial-letter-container">
  <div id="initial-letter" class="letter">A</div>
</div>

<div id="main-site" style="display: none;">

  <div class="chat-container">
    <!-- Marine's message -->
    <div class="chat-message marine">
      <div class="contact-picture">
        <img src="assets/img/productrice.png" alt="Marine">
      </div>
      <div class="chat-bubble">
        For over a century, cinema has shaped how we see the world, crafting our stories and reflecting our cultures. Yet, the way women are written remains trapped in the past. I’ve been a producer in this industry for over a decade and I remember standing backstage at the Oscars ceremony when a director remarked, “There just aren’t enough compelling stories with women leads.” How can we say that when we've barely allowed women to be anything but the mother, the wife, the lover ? 
        I’m done watching brilliant actresses confined to clichés. I want to create movies where women drive the story, stories where they’re not just present but pivotal. It’s time to break free from the old narrative!
      </div>
    </div>
    <!-- Marco's typing effect (appears first) -->
    <div id="typing-indicator" class="chat-message marco">
      <div class="contact-picture">
        <img src="assets/img/SAR.png" alt="Marco">
      </div>
      <div class="chat-bubble">
        <div class="typing-animation">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- Marco's response (appears after typing) -->
    <div id="marco-response" class="chat-message marco" style="display: none;">
      <div class="contact-picture">
        <img src="assets/img/SAR.png" alt="Marco">
      </div>
      <div class="chat-bubble">
        We’re here to help you turn your vision into reality! Through our analysis, we will help you create a movie that not only shines at the box office but sets a new benchmark for equality in cinema. We'll guide you through the key ingredients for crafting a movie that is as inclusive as it is successful. Because while inclusivity is the mission, success is the name of the game and our recommendations are designed to deliver both. So, let’s pull back the curtain on the current industry and explore the challenges that stand between you and a truly groundbreaking, inclusive movie. Together, let’s rewrite the narrative...
      </div>
    </div>
      
  <!-- Include your JavaScript file at the end of the body section -->
<script src="assets/js/message.js"></script>

<div id="additional-content" style="display: none;">

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

  ### The Bechdel Test

  <div style="margin: 20px 0; text-align: justify;">
    <p><strong>Film Director:</strong> I’ve heard about this interesting metric called the Bechdel Test. It’s a great starting point to evaluate how inclusive a movie is when it comes to gender representation. Let me walk you through it:</p>
    
    <p>The Bechdel Test is based on three simple criteria:</p>
    <ol style="margin: 15px auto; padding-left: 20px; max-width: 1200px; list-style-position: outside; text-align: justify;">
      <li>Does the film have at least two named women?</li>
      <li>Do these women talk to each other?</li>
      <li>Do they discuss something other than a man?</li>
    </ol>
    
    <p>It might sound simple, but you’d be surprised how many films fail to meet these basic requirements. While the test doesn’t capture everything about inclusivity, it’s a valuable tool for spotting patterns in storytelling. Let’s take a look at the results from various regions and years to see how movies perform.</p>
  </div>

  ### Visualizing the Bechdel Test Results

  Along the years: Avg bechdel test result

  <div style="display: flex; justify-content: center; align-items: center; margin: 40px auto; max-width: 1000px;">
    <div style="flex: 1; max-width: 100%; text-align: center;">
      <iframe src="assets/avg_bechdel_score_by_year.html" width="100%" height="500px" style="border: none;"></iframe>
    </div>
  </div>

  Around the world:

  <div style="display: flex; justify-content: center; align-items: center; margin: 40px auto; max-width: 1000px;">
    <div style="flex: 1; max-width: 100%; text-align: center;">
      <iframe src="assets/average_bechdel_score_map.html" width="100%" height="500px" style="border: none;"></iframe>
    </div>
  </div>

  Be careful! Over representation of the US in the Bechdel score databse:

  <div style="display: flex; justify-content: center; align-items: center; margin: 40px auto; max-width: 1000px;">
    <div style="flex: 1; max-width: 100%; text-align: center;">
      <iframe src="assets/bechdel_countries_piechart.html" width="100%" height="500px" style="border: none;"></iframe>
    </div>
  </div>

  Interesting, and how does the bechdel score relate to the cast of a movie?

  <div style="display: flex; justify-content: center; align-items: center; margin: 40px auto; max-width: 1000px;">
    <div style="flex: 1; max-width: 100%; text-align: center;">
      <iframe src="assets/bechdel_score_vs_female_ratio.html" width="100%" height="500px" style="border: none;"></iframe>
    </div>
  </div>

  To add: Bechdel + Genre

  <br />
  <br />

  <p> <strong>Film Director:</strong> As you can see in the visualizations above, the results reveal significant trends in gender representation across different regions and time periods. For example, North America shows some improvement over the decades, but there’s still work to do. Europe and Asia have their own unique patterns as well.</p>

  <p> While passing the Bechdel Test is a good start, we need to think about how meaningful the roles for women really are. Let’s discuss how we can go beyond this and create truly inclusive films.</p>

  # The Inclusivity Score

  <br />
  <br />

  <p> <strong>SAR team:</strong> Okay, this Bechdel Test is very interesting. However, if you create a movie with the intent of achieving a Bechdel score of 3, this is very easy. You just need to hire two women and write a two-line dialogue about something unrelated to men. Therefore, we aim to create a more meaningful metric to evaluate whether a movie is truly inclusive.</p><br><br>

  <p class="indent"> The Bechdel score provides a solid foundation for developing an inclusivity metric. To build on this, we also evaluate the proportion of actresses in the movie to assess the level of female representation. However, this alone is insufficient. A movie may feature many women in minor or background roles, or conversely, a single actress who takes on the lead role. Therefore, we also consider the share of the script attributed to actresses to capture their meaningful presence in the film.
  </p>
  <p class="indent">
      Indeed, looking at the distribution of the script in the figure below provided by <a href="https://pudding.cool/2017/03/film-dialogue/" target="_blank" rel="noopener noreferrer">The Pudding</a>. Only 24% of movies show an equal or more female distribution of the script!
  </p>

  <br>
  <div style="width: 100%; height: 100vh; overflow: hidden;">
    <iframe src='https://pudding.cool/2017/03/film-dialogue/embed.html' frameborder='0' style="width: 110%; height: 110%; border: none;"></iframe>
  </div>

  Thus, the inclusivity score is calculated as follows:<br><br>

  $$
  \textbf{Inclusivity Score} = \frac{\text{Normalized Bechdel Score} + \text{Promotion of Actress} + \text{Women’s Share of the Script}}{3}
  $$

  <br>

  <p>
      <strong>1. Normalized Bechdel Score:</strong> The traditional Bechdel score scaled to ensure compatibility with other metrics.<br>
      <strong>2. Promotion of Actress:</strong> The proportion of actresses in the movie compared to actors.<br>
      <strong>3. Women’s Share of the Script:</strong> The percentage of the script allocated to female characters.<br><br>
  </p>
  <p class="indent"> This approach ensures a more comprehensive and meaningful evaluation of inclusivity in movies, moving beyond the simplicity of the Bechdel Test.</p>

  <br />

  <p> <strong>Producer:</strong> This Inclusivity score is a good idea, but I have done some research. Look, movies with high success scores all have very poor representation ratings. I want to help the film industry become more equitable, but I don’t want my movie to fail.</p>

  {% include movie_dashboard.html %}

  <br />
  <p class="indent"> Indeed, when examining movies ranked by either their inclusivity or their success scores, we observe a potential negative correlation between inclusivity and success. Specifically, less inclusive movies appear to be more successful compared to their more inclusive counterparts. However, when looking at movies ranked by their success, the connection between success and low inclusivity becomes less apparent: some of the least successful movies have low inclusivity scores, while several successful movies demonstrate good inclusivity. That said, the very top-performing movies tend to remain relatively uninclusive. Further statistical analyses using both Pearson and Spearman correlation analyses provides a reassuring perspective, as the results indicate only a weak negative correlation. The Pearson correlation coefficient is -0.125 (p-value = 6.82e-05), and the Spearman correlation coefficient is -0.126 (p-value = 6.33e-05). While the low p-values indicate the results are statistically significant, the correlation coefficients are close to zero, signifying a very weak association. This suggests no meaningful evidence of inclusivity negatively impacting a movie's success.
  </p>

  <br />

  <p> <strong>SAR team:</strong> You can be reassured, if your movie is good, prioritizing inclusivity will not harm its success. However, there is still significant progress to be made before inclusivity becomes the norm in movie industry. While we would expect that inclusivity positively contributes to a movie’s success, we are far from it. Achieving this will require continued efforts, such as better representation of women in storytelling and active advocacy within the industry. </p>

  <br />
  <br />

  # The Success Metric

  <p> </strong>Producer:</strong> Okay, this is nice. I guess we will succeed in making an inclusive movie. However, I am concerned that it might affect the success of my movie. </p>
  <br />
  <br />
  <p class="indent"> Defining what constitutes the success of a movie is not an easy task. Naturally, we want the movie to generate as much revenue as possible, but we also consider it equally important for the movie to be appreciated by the audience. To capture this balance, we introduce a success metric:
  </p>

  $$
    \textbf{Net Box Office Revenue} = \text{Box Office Revenue} - \text{Initial Budget}
  $$

  $$
    \textbf{Success Metric} = a_1 \cdot \text{rank}(\text{Net Box Office Revenue}) + a_2 \cdot \text{rank}(\text{Rating})
  $$

  <p class="indent"> Here, \( a_{1} \) and \( a_{2} \) are constants. In this case, we set \( a_{1} = a_{2} = 0.5 \), as we consider both rating and revenue equally important. However, if someone wanted to prioritize either revenue or rating, the constants could be adjusted accordingly.
  </p>
  <br />
  <br />
  <p class="indent"> Using the rank of revenue and rating ensures equal weighting between the two metrics, even if the revenue values are significantly large. For example, a movie with the highest revenue in the dataset will have rank(Net Box Office Revenue) = 1. However, if it is the lowest-rated movie, regardless of how large its revenue is rank(Rating) = 0 In this case, the success metric would be of 0.5. This ranking approach prevents the success metric from being disproportionately influenced by very high revenue figures, ensuring that both factors contribute fairly to the final score.
  </p>
  <br />
  <br />

  <br />
  <br />


  <!-- Search Widget -->
  <div class="search-widget">
    <div class="label">Search your favourite movie:</div>
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

</div>

<!-- Include the sound file -->
<audio id="letter-sound" src="assets/sounds/send.wav" preload="auto"></audio>
