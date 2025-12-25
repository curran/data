From ChatGPT, 12/25/2025

Prompt:

Tell me about this dataset: Rdatasets/csv/Ecdat/Cigarette.csv state year cpi pop packpc income tax avgprs taxs 1 AL 1985 1.07599997520447 3973000 116.486282348633 46014968 32.5000038146973 102.181671142578 33.3483352661133 2 AR 1985 1.07599997520447 2327000 128.534591674805 26210736 37 101.474998474121 37 3 AZ 1985 1.07599997520447 3184000 104.522613525391 43956936 31 108.578750610352 36.1704177856445 4 CA 1985 1.07599997520447 26444000 100.363037109375 447102816 26 107.837341308594 32.1040000915527

Response:

This file is a **classic panel dataset on cigarette consumption and taxation in the United States**, commonly used in econometrics and public-policy analysis.

It comes from the **Ecdat** collection in the **Rdatasets** repository and is usually referred to simply as **`Cigarette`**.

---

## What this dataset is about

* **Unit of observation:** US **state × year**
* **Time period:** Mid-1980s through mid-1990s (your snippet shows 1985)
* **Purpose:** Study how **prices, taxes, and income** affect cigarette consumption
* **Typical use cases:**

  * Demand estimation
  * Tax incidence
  * Public health policy evaluation
  * Difference-in-differences or fixed-effects models

This dataset is often cited in textbooks and papers on **applied econometrics**.

---

## Columns explained

| Column     | Meaning                                                                           |
| ---------- | --------------------------------------------------------------------------------- |
| **state**  | Two-letter US state abbreviation                                                  |
| **year**   | Calendar year                                                                     |
| **cpi**    | Consumer Price Index (used for real price adjustment; base year varies by source) |
| **pop**    | State population                                                                  |
| **packpc** | **Cigarette packs sold per capita** (key outcome variable)                        |
| **income** | Total personal income in the state (nominal dollars)                              |
| **tax**    | State cigarette excise tax **per pack** (cents)                                   |
| **avgprs** | **Average real price per pack**, adjusted by CPI                                  |
| **taxs**   | Total tax burden per pack (state + federal, cents)                                |

---

## What makes this dataset useful

### 1. Clean economic structure

You have:

* Quantity demanded (`packpc`)
* Price (`avgprs`)
* Tax instrument (`tax`, `taxs`)
* Income (`income`)
* Population scale (`pop`)
* Time variation (`year`)
* Cross-sectional variation (`state`)

This makes it ideal for **log-log demand models**, elasticity estimation, and causal inference.

---

### 2. Natural panel data

Each state appears repeatedly across years, which enables:

* **State fixed effects** (control for culture, smoking norms)
* **Year fixed effects** (national trends, regulation)
* Policy variation across states and time

---

### 3. Well-known benchmark dataset

Many published results exist using this data, making it excellent for:

* Reproducing classic econometric results
* Teaching panel methods
* Comparing model specifications

---

## Common analyses done with this data

* **Price elasticity of cigarette demand**
* **Effect of excise taxes on smoking behavior**
* **Short- vs long-run demand responses**
* **Income effects on cigarette consumption**
* **Tax pass-through to prices**

A typical regression might look like:

[
\log(\text{packpc}) \sim \log(\text{avgprs}) + \log(\text{income}) + \text{state FE} + \text{year FE}
]

---

## Important caveats

* **Income is aggregate**, not per-capita (often log-transformed)
* **Prices are averages**, not transaction-level
* Does **not** capture black-market or cross-border purchases explicitly
* CPI base year must be checked before comparing across sources

---

## Why this is a great teaching dataset (especially for VizHub / textbook use)

Given your focus on **applied data visualization and econometrics**, this dataset is excellent for:

* Small multiples by state
* Price vs consumption scatter plots with time sliders
* Tax hikes annotated on time series
* Fixed-effects residual visualization
* Before/after tax change comparisons

If you want, I can:

* Propose **specific visualizations** that align with your book structure
* Sketch a **VizHub-ready exploratory dashboard**
* Help design a **chapter narrative** using this dataset


Great choice of dataset. Below is a **chapter-aligned visualization plan** that fits your *Constructing Visualizations* book structure and mirrors how a real consulting project would unfold. I’ll keep this grounded in **vanilla JS + D3**, with each viz being something you could realistically host as a standalone VizHub example.

---

## Chapter 1–2

### Understanding the Data & Framing the Question

### 1. **Dataset Overview Table + Marginal Distributions**

**Purpose:** Build intuition before “doing charts.”

**Visualizations**

* Interactive data table (sortable by state, year)
* Histograms:

  * `packpc` (packs per capita)
  * `avgprs` (real price)
  * `tax` / `taxs`

**Teaches**

* Data types (categorical vs quantitative)
* Skewness
* Why logs might be appropriate

**Key takeaway**

> Consumption varies more across *states* than *years*, hinting at fixed effects.

---

## Chapter 3

### First Chart Quickly: Scatterplots

### 2. **Price vs Consumption Scatterplot**

**Purpose:** Get to a meaningful chart fast.

**Visualizations**

* Scatterplot:

  * x: `avgprs`
  * y: `packpc`
* Tooltip: state, year
* Optional color: year

**Teaches**

* Quantitative scales
* Axes, ticks
* Tooltips
* Visual correlation

**Key takeaway**

> Higher prices are associated with lower consumption, but the relationship is noisy.

---

## Chapter 4

### Time & Trends

### 3. **Small-Multiple Time Series by State**

**Purpose:** Reveal longitudinal structure.

**Visualizations**

* Small multiples:

  * x: year
  * y: packpc
  * one panel per state
* Shared y-scale

**Teaches**

* Faceting
* Small multiples
* Consistent scales
* Temporal encoding

**Key takeaway**

> States have persistent differences in consumption levels.

---

## Chapter 5

### Normalization & Derived Metrics

### 4. **Per-Capita vs Aggregate Comparison**

**Purpose:** Show why normalization matters.

**Visualizations**

* Side-by-side:

  * Total packs sold (`packpc × pop`)
  * Packs per capita (`packpc`)
* Toggle between metrics

**Teaches**

* Derived fields
* Unit analysis
* When per-capita is appropriate

**Key takeaway**

> Population size can completely change the story.

---

## Chapter 6

### Comparing Categories

### 5. **State Ranking Over Time**

**Purpose:** Introduce ranking and comparison.

**Visualizations**

* Ranked bar chart:

  * y: state
  * x: packpc
* Year slider

**Teaches**

* Ordinal scales
* Transitions
* Sorting
* Temporal interaction

**Key takeaway**

> Rankings are fairly stable, reinforcing state-specific effects.

---

## Chapter 7

### Color, Encodings, and Multivariate Views

### 6. **Price vs Consumption, Colored by Tax Level**

**Purpose:** Add a third variable.

**Visualizations**

* Scatterplot:

  * x: avgprs
  * y: packpc
  * color: tax or taxs (sequential scale)
* Legend with explanation

**Teaches**

* Color scales
* Multivariate encoding
* Perceptual limits

**Key takeaway**

> Taxes are strongly associated with higher prices.

---

## Chapter 8

### Interaction Design

### 7. **Linked Scatter + Time Series**

**Purpose:** Introduce coordinated views.

**Visualizations**

* Scatterplot (price vs consumption)
* Time series panel
* Hovering a point highlights that state’s line

**Teaches**

* Linked highlighting
* Shared state
* Interaction patterns

**Key takeaway**

> Individual states follow distinct trajectories through price–consumption space.

---

## Chapter 9

### Causal Thinking (Without Heavy Stats Yet)

### 8. **Tax Change Before/After Comparison**

**Purpose:** Visual causal reasoning.

**Visualizations**

* Difference plot:

  * x: years since tax change
  * y: packpc
* Highlight states with large tax hikes

**Teaches**

* Event alignment
* Before/after framing
* Visual counterfactuals

**Key takeaway**

> Consumption tends to drop following major tax increases.

---

## Chapter 10

### Modeling Results as Visuals

### 9. **Observed vs Predicted Consumption**

**Purpose:** Visualize model output.

**Visualizations**

* Scatter:

  * x: observed packpc
  * y: predicted packpc
* Residual color encoding

**Teaches**

* Model interpretation
* Residuals
* Diagnostic visualization

**Key takeaway**

> Price explains a lot, but not everything.

---

## Chapter 11

### Dashboard Assembly

### 10. **Policy Exploration Dashboard**

**Purpose:** Synthesize everything.

**Visualizations**

* Controls:

  * State selector
  * Year range
* Views:

  * Time series
  * Scatterplot
  * Ranking
* Linked interactions

**Teaches**

* Layout
* State management
* Tradeoffs between views

**Key takeaway**

> No single chart answers the policy question alone.

---

## Chapter 12

### Communication & Storytelling

### 11. **Annotated Narrative Visualization**

**Purpose:** Editorial polish.

**Visualizations**

* Scrollytelling layout
* Key annotations:

  * Federal tax changes
  * Major state policy shifts

**Teaches**

* Annotation
* Narrative flow
* Audience framing

**Key takeaway**

> Visualization is about explanation, not just exploration.

---

## Why this maps perfectly to your book vision

* Each viz can be:

  * A **standalone VizHub project**
  * A **chapter artifact**
  * A **teachable implementation**
* The sequence mirrors:

  * Data → exploration → interaction → modeling → narrative
* The dataset stays constant, reducing cognitive load

---

If you want, next we can:

* Turn this into a **chapter-by-chapter table of contents**
* Design a **VizHub project timeline** that mirrors the book
* Specify **exact D3 APIs** used per chapter (scales, joins, transitions)

This dataset is a *near-perfect spine* for the book you’re writing.

