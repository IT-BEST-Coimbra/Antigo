function preloadImages() {
    const imageUrls = [
        'path/to/image1.jpg',
        'path/to/image2.jpg',
        'path/to/image3.jpg'
    ];

    const preloadedImages = [];

    imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
        preloadedImages.push(img);
    });

    // You can now use the preloadedImages array when needed
}

// Call the function to start preloading the images
preloadImages();