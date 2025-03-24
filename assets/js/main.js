document.addEventListener('DOMContentLoaded', function() {
    // Sample data - In a real application, this would come from a backend API
    const popularDishes = [
        {
            id: 1,
            name: 'Margherita Pizza',
            image: 'https://source.unsplash.com/random/300x200/?pizza',
            description: 'Classic pizza with tomato sauce, mozzarella, and basil',
            price: '$12.99',
            restaurant: 'Italian Delights'
        },
        {
            id: 2,
            name: 'Chicken Tikka Masala',
            image: 'https://source.unsplash.com/random/300x200/?curry',
            description: 'Tender chicken in a creamy tomato sauce with Indian spices',
            price: '$14.99',
            restaurant: 'Spice Garden'
        },
        {
            id: 3,
            name: 'Beef Burger',
            image: 'https://source.unsplash.com/random/300x200/?burger',
            description: 'Juicy beef patty with cheese, lettuce, and special sauce',
            price: '$10.99',
            restaurant: 'Burger House'
        },
        {
            id: 4,
            name: 'Sushi Platter',
            image: 'https://source.unsplash.com/random/300x200/?sushi',
            description: 'Assorted fresh sushi with wasabi and soy sauce',
            price: '$18.99',
            restaurant: 'Ocean Sushi'
        }
    ];

    const popularRestaurants = [
        {
            id: 1,
            name: 'Italian Delights',
            image: 'https://source.unsplash.com/random/300x200/?italian-restaurant',
            description: 'Authentic Italian cuisine with a modern twist',
            rating: 4.7,
            cuisine: 'Italian'
        },
        {
            id: 2,
            name: 'Spice Garden',
            image: 'https://source.unsplash.com/random/300x200/?indian-restaurant',
            description: 'Flavorful Indian dishes made with traditional recipes',
            rating: 4.5,
            cuisine: 'Indian'
        },
        {
            id: 3,
            name: 'Burger House',
            image: 'https://source.unsplash.com/random/300x200/?burger-restaurant',
            description: 'Gourmet burgers and sides in a casual setting',
            rating: 4.3,
            cuisine: 'American'
        },
        {
            id: 4,
            name: 'Ocean Sushi',
            image: 'https://source.unsplash.com/random/300x200/?japanese-restaurant',
            description: 'Fresh sushi and Japanese specialties made to order',
            rating: 4.8,
            cuisine: 'Japanese'
        }
    ];

    // Load popular dishes
    const dishesContainer = document.querySelector('.dishes-container');
    if (dishesContainer) {
        popularDishes.forEach(dish => {
            const dishCard = document.createElement('div');
            dishCard.className = 'dish-card';
            dishCard.innerHTML = `
                <img src="${dish.image}" alt="${dish.name}" class="dish-image">
                <div class="dish-info">
                    <h3>${dish.name}</h3>
                    <p>${dish.description}</p>
                    <p class="dish-price">${dish.price}</p>
                    <p><small>From: ${dish.restaurant}</small></p>
                </div>
            `;
            dishesContainer.appendChild(dishCard);
        });
    }

    // Load popular restaurants
    const restaurantsContainer = document.querySelector('.restaurants-container');
    if (restaurantsContainer) {
        popularRestaurants.forEach(restaurant => {
            const restaurantCard = document.createElement('div');
            restaurantCard.className = 'restaurant-card';
            restaurantCard.innerHTML = `
                <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
                <div class="restaurant-info">
                    <h3>${restaurant.name}</h3>
                    <p>${restaurant.description}</p>
                    <p><small>Cuisine: ${restaurant.cuisine}</small></p>
                    <div class="restaurant-rating">
                        <span>★</span>
                        <span>${restaurant.rating}</span>
                    </div>
                </div>
            `;
            restaurantsContainer.appendChild(restaurantCard);
        });
    }

    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});
