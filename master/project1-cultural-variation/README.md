# Project 1: How Does Translation Change the Tone?

**Question:** How do politeness and formality change when text is translated between languages?

## The Idea

The dataset already contains everything you need: original text with style scores, and translations from six different systems, also with scores. Your job is to compare them and find the patterns.

## What Is Already in the Data

- Politeness scores (0 to 1) for text in English, Spanish, Japanese, Chinese
- Formality labels (formal/informal) for text in English, French, Italian, Portuguese
- Intimacy scores (0 to 1) for text in English, Spanish, Portuguese, Italian, French, Chinese
- Translation outputs from GPT-4, GPT-3.5, Google Translate, Llama, Gemma, NLLB
- Style scores for all those translations (already computed)

Everything is in the GitHub repo as CSV and pickle files.

## Steps

1. **Download the repo.** Clone https://github.com/shreyahavaldar/style_alignment. The data is in `data/labeled_data/` (CSVs) and `data/` (pickle files with translation outputs and scores).

2. **Compare original vs translated style scores.** For each translation, you have the original style score and the translated style score. If a sentence is 0.9 (very polite) in English but 0.5 (neutral) in Japanese, that is a gap of 0.4.

3. **Calculate the style gap per language pair.** Which pairs lose the most? The paper found that English-to-Japanese and English-to-Chinese lose more style than English-to-Spanish.

4. **Analyze by style level.** Is the problem worse for very polite text or very casual text? The paper found that extreme styles get flattened more. Map out exactly where this happens.

5. **Compare the six translation models.** Which one preserves style best? The paper found Google Translate scores 0.58 and GPT-4 scores 0.49 on style alignment. Break this down by language and by dimension.

6. **Look at the neutrality bias.** The paper showed that all models push translations toward neutral (0.4-0.6 range). Measure the standard deviation of translated text vs original text to show this compression.

## Numbers from the Paper

| Model | Style alignment (Pearson) |
|-------|--------------------------|
| Google Translate | 0.58 |
| GPT-3.5 | 0.51 |
| GPT-4 | 0.49 |
| Llama-11B | 0.48 |
| NLLB-1.3B | 0.45 |
| Gemma-7B | 0.37 |

## What You Deliver

Tables and charts showing how style changes in translation: by language pair, by style level, and by model. An analysis of where the biggest problems are.

## Resources

- Paper: https://arxiv.org/abs/2507.00216
- Code + Data: https://github.com/shreyahavaldar/style_alignment
