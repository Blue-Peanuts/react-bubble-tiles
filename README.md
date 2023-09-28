# Bubble Tiles - A Mouse Cursor Effect Component

Bubble Tiles is a customizable React component that creates an interactive grid of circles. These circles dynamically change in size based on their proximity to the mouse cursor. It's a simple but fun component to add to any website.

## Interactive Demo

See Bubble Tiles in action! Try out the interactive demo: [Demo](https://blue-peanuts.github.io/react-bubble-tiles/)

## Installation

To use the Bubble Tiles component in your React application, follow these simple steps:

1. Copy the `src/bubble_tiles` directory from this repository.
2. Paste the copied directory into your React app's source code.

That's it! You're now ready to start using Bubble Tiles in your project.

## Usage

Here's how you can use the Bubble Tiles component in your React application:

```jsx
import React from 'react';
import BubbleTiles from './bubble_tiles'; // Adjust the import path as needed

function App() {
  return (
    <div>
      {/* Other components or content */}
      <BubbleTiles
        sections={10} // The number of sections in the grid
        gridToWindowRatio={0.8} // Optional: Adjust the grid size relative to the window
        zIndex={-10} // Optional: Z-index for the component
        color="#3498db" // Optional: Circle color
        borderRadius="50%" // Optional: Circle border-radius
        bubbleSize={50} // Optional: Initial bubble size
      />
      {/* Other components or content */}
    </div>
  );
}

export default App;
```

## Props

The Bubble Tiles component accepts the following props:

- `sections` (optional): The number of rows/columns in the grid. (Default: `10`)
- `gridToWindowRatio` (optional): Adjusts the grid size relative to the window's width. (Default: `1/3`)
- `zIndex` (optional): The z-index for the component. (Default: `-1`)
- `color` (optional): The color of the circles. (Default: `#ffffff`)
- `borderRadius` (optional): The border-radius of the circles. (Default: `'50%'`)
- `bubbleSize` (optional): The initial size of the circles. (Default: `100`)

## Example

You can customize the component's appearance and behavior by adjusting the props according to your requirements. Experiment with different values to achieve the desired effect.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to contribute, report issues, or suggest improvements to this project. If you have any questions or need assistance, please don't hesitate to reach out.
