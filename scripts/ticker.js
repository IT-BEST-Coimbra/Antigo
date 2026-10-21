const tickerWrapper = document.querySelector('.ticker__wrapper');

// Fetch the HTML content from the published Google Docs link
fetch('https://docs.google.com/document/d/e/2PACX-1vShni4P_5VBb8mTpmW6SHTyKzUm0jjZHdOlkuxXgRDdqEKKBrjf5A0WwCQTi7C0kvxpguHt3OJVCTbS/pub')
  .then(response => response.text())
  .then(data => {
    // Create a temporary element to parse the HTML content
    const tempElement = document.createElement('div');
    tempElement.innerHTML = data;

    // Retrieve the phrases from the HTML structure
    const paragraphs = tempElement.querySelectorAll('p'); // Assuming each phrase is contained within a <p> element

    // Create a news item for each phrase
    paragraphs.forEach(paragraph => {
      const phrase = paragraph.textContent.trim();
      if (phrase.length > 0) {
        const newItem = document.createElement('div');
        newItem.classList.add('ticker__item');
        newItem.textContent = phrase;
        tickerWrapper.appendChild(newItem);
      }
    });

    // Duplicate the news items to ensure continuous scrolling
    const tickerItems = tickerWrapper.querySelectorAll('.ticker__item');
    const numItems = tickerItems.length;
    for (let i = 0; i < numItems; i++) {
      tickerWrapper.appendChild(tickerItems[i].cloneNode(true));
    }

    // Calculate the total width of the news items
    const totalWidth = tickerWrapper.scrollWidth;

    // Set the animation duration based on the total width
    const animationDuration = totalWidth / 100 + 19;

    // Set the animation duration on the CSS animation
    tickerWrapper.style.animationDuration = `${animationDuration}s`;
  })
  .catch(error => {
    console.log('Error retrieving document content:', error);
  });
