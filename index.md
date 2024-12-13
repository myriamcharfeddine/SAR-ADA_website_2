---
layout: default
title: "SARteam"
---

# Introduction

## Part1




<div style="width: 100%; height: 100vh; overflow: hidden;">
  <iframe src='https://pudding.cool/2017/03/film-dialogue/embed.html' frameborder='0' style="width: 110%; height: 110%; border: none;"></iframe>
</div>


<br />
<br />

# Part2
<br />
<br />

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

