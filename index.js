const features = [
  {
    icon: "/images/Frame.png",
    title: "Verified Charities & Donors",
    description:
      "Every connection on Lokarth is authentic. We partner with verified charities and genuine individuals, ensuring your donations reach only the right hands. Trust is at the heart of giving."
  },
  {
    icon: "/images/Frame1.png",
    title: "Transparent Process",
    description:
      "No more guessing where your contribution goes. Lokarth gives you complete visibility, from donation initiation to fulfillment, so you always know the impact you’re creating."
  },
  {
    icon: "/images/Frame (4).png",
    title: "Instant Certificates",
    description:
      "Whether it’s a financial donation or blood contribution, Lokarth instantly rewards you with verified certificates. A token of appreciation, and a record of your kindness."

  },
  {
    icon: "/images/Frame (2).png",
    title: "Emergency Alerts",
    description:
      "When urgent needs arise—like a hospital requiring blood or disaster relief requests—Lokarth notifies you in real time. Because sometimes, your help can’t wait until tomorrow."
  },
  {
    icon: "/images/Frame (3).png",
    title: "Multiple Ways to Give",
    description:
      "Support communities the way you want. Contribute money, food, clothes, or blood—all through one platform designed to make giving as simple as possible."
  },
  {
    icon: "/images/Frame (5).png",
    title: "Measurable Impact",
    description:
      "See the bigger picture of your contributions. Lokarth provides clear summaries of how your donations are used, helping you witness the change you’re driving forward."
  }
];

const featuresContainer = document.getElementById('features-container');
featuresContainer.innerHTML = features.map(feature => `
  <div class="feature-card">
    <img src="${feature.icon}" alt="${feature.title} icon" class="feature-icon" />
    <h3>${feature.title}</h3>
    <p>${feature.description}</p>
  </div>
`).join('');


  // Example donation data (can be fetched from API later)
  const donations = [
    {
      category: "Education",
      title: "Help Azar to continue his study",
      image: "./images/photo.png",
      goal: 1234,
      collected: 900,
      remaining: 334,
      progressColor: "#12853cff"
      
    },
    {
      category: "Blood",
      title: "Save Peter life",
      image: "./images/photo (1).png",
      goal: 1234,
      collected: 1100,
      remaining: 134,
      progressColor: "#BF3C16"
    },
    {
      category: "Clothes",
      title: "Build School for poor students",
      image: "./images/photo (2).png",
      goal: 1234,
      collected: 600,
      remaining: 634,
      progressColor: "#831B67"
    },
    {
      category: "Food",
      title: "Make them happy",
      image: "./images/photo (3).png",
      goal: 1234,
      collected: 500,
      remaining: 734,
      progressColor: "#2E6C92"
    }
  ];

  const doner = document.getElementById("cardsContainer");

  donations.forEach(donation => {
    // Calculate progress percentage
    const progressPercent = (donation.collected / donation.goal) * 100;

    // Create card element
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-image" style="background-image: url('${donation.image}')"></div>
      <div class="card-body">
        <span class="badge ${donation.category.toLowerCase()}">${donation.category}</span>
        <div class="card-title">${donation.title}</div>

        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progressPercent}%; background: ${donation.progressColor};"></div>
        </div>

        <div class="card-stats">
          <div><strong>Goal:</strong> <p>₹${donation.goal}</p></div>
          <div><strong>Collected:</strong> <p>₹${donation.collected}</p></div>
          <div><strong>Remaining:</strong> <p>₹${donation.remaining}</p></div>
        </div>
        <div class="card-footer">
        <button  class="btn-donate">DONATE</button>
        <span class="share-circle">
          <span class="material-symbols-outlined share_icon">share</span>
        </span> 
      </div>
      </div>
      
    `;

    doner.appendChild(card);
  });

const contactForm = document.getElementById('contactForm');

contactForm.onsubmit = function(event) {
    event.preventDefault();

    const submitBtn = event.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    const datetime = new Date().toLocaleString();

    emailjs.send('service_Lokarth', 'template_yookgyo', {
        name: document.getElementById('name').value,
        email: document.getElementById('contact-email').value,
        phone: document.getElementById('phone').value,
        description: document.getElementById('description').value,
        datetime: datetime
    })
    .then(function(response) {
        alert('Thank you! Your message has been sent.');
        contactForm.reset();
    })
    .catch(function(error) {
        alert('Oops! Something went wrong. Please try again later.');
    })
    .finally(function() {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Contact Us';
    });
};

document.getElementById('notify-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const enteredEmail = document.getElementById('notify-email').value;
    document.getElementById('contact-email').value = enteredEmail;
    document.getElementById('contact-us-row').scrollIntoView({ behavior: 'smooth' });
});
