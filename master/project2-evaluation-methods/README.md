# Project 2: Building a Style Meter for Translation

**Question:** How can we measure whether a translation keeps the right cultural tone?

## The Idea

Standard translation quality scores (BLEU, CometKiwi) check if the words are correct but completely miss the tone. The paper proved this -- high-quality translations can still sound wrong to a native speaker. You will train classifiers that catch what these metrics miss.

## What Is Already in the Data

- Annotated text with politeness scores in 4 languages (~20,500 examples)
- Annotated text with formality labels in 4 languages (~8,000 examples)
- Annotated text with intimacy scores in 6 languages (~11,800 examples)
- Train/test splits ready to use

## Steps

1. **Load the annotated data.** The repo has CSVs in `data/labeled_data/` with text and scores, already split into train and test.

2. **Train a style classifier for each language and dimension.** The paper trained Mistral-7B with LoRA fine-tuning. You feed in a sentence and the model predicts a score (0 to 1 for politeness/intimacy, 0 or 1 for formality). You train one classifier per language per dimension.

3. **Test your classifiers.** Measure the error on the test set. The paper reports average RMSE of 0.195. Try to match this.

4. **Use the classifiers to score translations.** The repo already has translation outputs. Run your classifiers on them. Now for each translation you have: (a) the original style score and (b) your predicted translated style score. The Pearson correlation between these is your style alignment metric.

5. **Show that standard metrics miss style.** The paper found no significant correlation between BLEU/CometKiwi and style alignment. Replicate this finding with your classifiers -- this proves the field needs a style-aware evaluation method.

6. **Compare models.** Use your classifiers to rank the six translation models. Which one preserves politeness best? Which one preserves formality best?

## Numbers from the Paper

| What | Score |
|------|-------|
| Style classifier accuracy (avg RMSE) | 0.195 |
| BLEU/CometKiwi vs style alignment | No significant correlation |
| Human preference for RASTA (politeness) | 61% prefer RASTA |
| Human preference for RASTA (formality) | 63% prefer RASTA |
| GPT-4 style alignment (before RASTA) | 0.49 |
| GPT-4 style alignment (after RASTA) | 0.70 for politeness |

## What You Deliver

Style classifiers that measure politeness and formality in translated text. Evidence that standard metrics miss tone problems. A ranking of translation models by style preservation.

## Resources

- Paper: https://arxiv.org/abs/2507.00216
- Code + Data: https://github.com/shreyahavaldar/style_alignment
