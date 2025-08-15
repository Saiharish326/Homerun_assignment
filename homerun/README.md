# Homerun Assignment

A simple React-based product order UI.  
Users can view product cards, adjust quantity, and see error messages if they exceed the allowed limit.

## Features

- Product card with image, name, price
- Quantity adjustment buttons (+, -, <<, >>)
- "Add" button with green color (`#328616`)
- Maximum quantity limit per order (shows error if exceeded)
- Responsive and clean UI

## Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd Homerun_assignment/homerun
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will run at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

```
src/
  components/
    ProductCard.jsx
  pages/
    HomePage.jsx
  assets/
    cement.jpg
  App.jsx
  main.jsx
```

## Usage

- On the homepage, you’ll see a list of product card.
- Click "Add" to add the product to your order.
- Use +, -, <<, >> to adjust the quantity.
- If you try to add more than the maximum allowed (default: 10), you’ll see:  
  **"Maximum 10 allowed per order. Please place another order if required."**

## Customization

- To change the product, edit `HomePage.jsx`.
- To change the maximum allowed quantity, update the `maxLimit` prop in `HomePage.jsx`.

## License

MIT

---
