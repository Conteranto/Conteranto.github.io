# Project 3: Style Alignment in Non-Western Languages

**Question:** Do translation models lose more style for non-Western languages like Japanese and Chinese?

## The Idea

The paper already found that style is lost more for Japanese and Chinese than for Spanish or French. Your job is to dig deeper: why does this happen? Which styles suffer most? And does the RASTA method close the gap?

Everything you need is already in the dataset. No new annotation required.

## What Is Already in the Data

- Politeness data for Japanese and Chinese (alongside English and Spanish)
- Intimacy data for Chinese (alongside 5 Western languages)
- Translation outputs for all these languages from 6 models
- RASTA outputs for GPT-4 and Llama (the improved translations)
- All scores already computed

## Steps

1. **Split the data into Western vs non-Western.** Western: English, Spanish, French, Italian, Portuguese. Non-Western: Japanese, Chinese. The data is already there for both groups.

2. **Compare style alignment scores.** For each translation model, calculate the style alignment (Pearson correlation) separately for Western and non-Western target languages. The paper found a gap of 0.35 -- confirm and break it down.

3. **Analyze which styles suffer most.** Is the gap bigger for politeness or formality? Is it worse for very polite text or very casual text in Japanese/Chinese? Plot the distributions.

4. **Test RASTA on non-Western languages.** The repo includes RASTA translations for GPT-4 and Llama. Calculate style alignment before and after RASTA for Japanese and Chinese specifically. The paper reports 30-50% improvement overall -- is it the same for non-Western languages?

5. **Look at the neutrality bias per culture.** The paper showed that translations get pushed toward neutral style. Is this compression stronger for Japanese and Chinese? Measure the standard deviation of style scores in original text vs translated text for each language.

6. **Analyze cultural patterns.** Japanese culture values indirectness and careful politeness levels. Chinese communication has its own formality norms. When models flatten the style, what specifically goes wrong? Pick example translations and show the difference.

## Numbers from the Paper

| What | Western | Non-Western | Gap |
|------|---------|-------------|-----|
| Style alignment (avg) | Higher | Lower | ~0.35 |
| Neutrality bias | Present | Worse | Larger compression |
| RASTA improvement | +30-50% | ? (your finding) | ? |
| Politeness variance (native) | 0.23 (Spanish) | 0.20 (Japanese, Chinese) | Similar |
| Politeness variance (translated) | 0.17 (Spanish) | 0.09-0.13 (Japanese, Chinese) | Much worse |

The last row is key: native Japanese and Chinese text has similar variety as Spanish, but translations collapse the variety much more for non-Western languages.

## What You Deliver

A detailed comparison of style alignment between Western and non-Western languages: where the gap is, why it exists, and whether RASTA closes it. This directly informs how tools like Conteranto should handle non-Western languages differently.

## Resources

- Paper: https://arxiv.org/abs/2507.00216
- Code + Data: https://github.com/shreyahavaldar/style_alignment
