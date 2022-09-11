//set an event listener for menu-dropdown button click
document.getElementById("menu-dropdown").addEventListener("click", function () {
  let el = document.getElementById("dropdown-menu-dropdown");
  if (el.style.display === "none") {
    el.style.display = "flex";
  } else {
    el.style.display = "none";
  }
});

//set an event listener to detect when to close certain dropdown menus
document.addEventListener("click", function (event) {
  let dropdownMenuDropdown = document.getElementById("dropdown-menu-dropdown");
  let menuDropdown = document.getElementById("menu-dropdown");

  //check if the dropdown menu should be closed
  if (
    dropdownMenuDropdown.style.display === "flex" &&
    !dropdownMenuDropdown.contains(event.target) &&
    !menuDropdown.contains(event.target)
  ) {
    dropdownMenuDropdown.style.display = "none";
  }

  //check if the card-selection-icons-mobile should be closed
  let cardSelectionIconsMobile = document.getElementById(
    "card-selection-icons-mobile"
  );
  if (
    !cardSelectionIconsMobile.classList.contains("firstOpen") &&
    cardSelectionIconsMobile.style.display === "inline-flex" &&
    !cardSelectionIconsMobile.contains(event.target)
  ) {
    cardSelectionIconsMobile.style.display = "none";
  } else {
    cardSelectionIconsMobile.classList.remove("firstOpen");
  }

  //check if the card-selection-icons-mobile should be closed
  let feedSelectionMenu = document.getElementById("feed-selection-layout");
  if (
    !feedSelectionMenu.classList.contains("firstOpen") &&
    feedSelectionMenu.style.display === "inline-flex" &&
    !feedSelectionMenu.contains(event.target)
  ) {
    feedSelectionMenu.style.display = "none";
  } else {
    feedSelectionMenu.classList.remove("firstOpen");
  }
});

//set an event listener for top news button clicks
document.addEventListener("click", function (event) {
  const updateButton = (target) => {
    let button = document.getElementById(target.id);

    if (button.classList.contains("join-community-button")) {
      button.classList.remove("join-community-button");
      button.classList.add("join-community-button-active");
      button.innerHTML =
        '<p class="joined-text">Joined</p><p class="leave-text">Leave</p>';
    } else {
      let button = document.getElementById(target.id);
      button.classList.remove("join-community-button-active");
      button.classList.add("join-community-button");
      button.innerHTML = '<p class="join">Join</p>';
    }
  };

  let button1 = document.getElementById("top-news-1");
  let button2 = document.getElementById("top-news-2");
  let button3 = document.getElementById("top-news-3");
  let button4 = document.getElementById("top-news-4");

  //check if any of the buttons were clicked
  if (
    button1.contains(event.target) ||
    button2.contains(event.target) ||
    button3.contains(event.target) ||
    button4.contains(event.target)
  ) {
    updateButton(event.target);
  }
});

//set an event listener for top news button clicks
document.addEventListener("click", function (event) {
  //listen for clicks on clear-recent-posts and remove it from the dom
  let clearRecentPosts = document.getElementById("clear-recent-posts");
  if (clearRecentPosts.contains(event.target)) {
    clearRecentPosts.parentElement.remove();
  }
});

document.addEventListener("scroll", (event) => {
  //determine if footer has reached the top of the screen
  let footer = document.getElementById("footer");
  let footerTop = footer.getBoundingClientRect().top;

  let recentPosts = document.getElementById("recent-posts");
  let recentPostsbottom = recentPosts.getBoundingClientRect().bottom;

  if (footer.classList.contains("card-body") && footerTop < 69) {
    footer.classList.add("footer-fixed");
    footer.classList.remove("card-body");
  }

  if (footer.classList.contains("footer-fixed") && recentPostsbottom > 48) {
    footer.classList.add("card-body");
    footer.classList.remove("footer-fixed");
  }
});

const upvote = (id) => {
  //get elements
  let upvote = document.getElementById(`upvote-${id}`);
  let downvote = document.getElementById(`downvote-${id}`);
  let upvoteCount = document.getElementById(`vote-count-${id}`);

  //check if the arrow is active
  //if it is, remove the active class and decrement the upvote count
  //if it is not, add the active class and increment the upvote count
  if (upvote.classList.contains("feed-arrow-selected-up")) {
    upvote.classList.remove("feed-arrow-selected-up");
    upvoteCount.classList.remove("vote-text-up");
  } else {
    upvote.classList.add("feed-arrow-selected-up");
    downvote.classList.remove("feed-arrow-selected-down");
    upvoteCount.classList.add("vote-text-up");
    upvoteCount.classList.remove("vote-text-down");
  }
};

const downvote = (id) => {
  //get elements
  let upvote = document.getElementById(`upvote-${id}`);
  let downvote = document.getElementById(`downvote-${id}`);
  let upvoteCount = document.getElementById(`vote-count-${id}`);

  //check if the arrow is active
  if (downvote.classList.contains("feed-arrow-selected-down")) {
    downvote.classList.remove("feed-arrow-selected-down");
    upvoteCount.classList.remove("vote-text-down");
  } else {
    downvote.classList.add("feed-arrow-selected-down");
    upvote.classList.remove("feed-arrow-selected-up");
    upvoteCount.classList.add("vote-text-down");
    upvoteCount.classList.remove("vote-text-up");
  }
};

//page setup functions
const createDropDownMenu = () => {
  const updateStar = (id) => {
    let el = document.getElementById(id).children[0];
    if (el.getAttribute("src") === "images/icon-star.svg") {
      el.src = "images/icon-star-filled.svg";
    } else {
      el.src = "images/icon-star.svg";
    }
  };

  //add communities to menu
  let communities = [
    {
      name: "r/SEO",
      image:
        "https://styles.redditmedia.com/t5_2wjav/styles/communityIcon_a0kac7rnkdi71.png",
      checked: false,
    },
    {
      name: "r/nonprofits",
      image:
        "https://styles.redditmedia.com/t5_2rzsx/styles/communityIcon_ngaqh14tqfj31.jpg?format=pjpg&s=995c4d459025f197881ae26dc8ccf30176a8488c",
      checked: false,
    },
    {
      name: "r/funny",
      image:
        "https://styles.redditmedia.com/t5_2qhfj/styles/communityIcon_1i72g3so4wi61.png",
      checked: false,
    },
    {
      name: "r/finance",
      image:
        "https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png",
      checked: false,
    },
    {
      name: "r/SaaS",
      image:
        "https://styles.redditmedia.com/t5_2qkq6/styles/communityIcon_u7ddkuay2xn21.jpg?format=pjpg&s=f2e6ba8e0650068b02b5dd92aa79476235cd65cf",
      checked: false,
    },
  ];

  //add the create community button
  let communityDiv = document.createElement("a");
  communityDiv.classList.add("menu-dropdown-button");
  communityDiv.innerHTML = `
        <div className="community-label">
            <img
                src='images/icon-plus.svg'
                height="16px"
                width="16px"
                class="dropdown-image"
                alt="plus icon"
            />
            <span class="dropdown-button-text">Create Community</span>
        </div>
    `;
  document.getElementById("communities").appendChild(communityDiv);

  communities.forEach((community) => {
    let communityDiv = document.createElement("a");
    communityDiv.classList.add("menu-dropdown-button");
    communityDiv.innerHTML = `
        <div className="community-label">
            <img
                src=${community.image}
                height="16px"
                width="16px"
                class="dropdown-image"
                alt="community icon"
            />
            <span class="dropdown-button-text">${community.name}</span>
        </div>
        <div id=${community.name}-star>
            <img
                src="images/icon-star.svg"
                height="16px"
                width="16px"
                class="dropdown-star"
                alt="star icon"
            />
        </div>
    `;
    //add a onclick event to the image inside of communityDiv
    let childImg = communityDiv.children[1];
    childImg.addEventListener("click", () => {
      updateStar(community.name + "-star");
    });

    document.getElementById("communities").appendChild(communityDiv);
  });

  //add the feed items
  let feeds = [
    {
      name: "Home",
      image: "images/icon-home.png",
    },
    {
      name: "Popular",
      image: "images/icon-trending.png",
    },
    {
      name: "All",
      image: "images/icon-all.png",
    },
    {
      name: "Reddit Live",
      image: "images/icon-reddit-live.png",
    },
  ];

  feeds.forEach((feed) => {
    let feedDiv = document.createElement("a");
    feedDiv.classList.add("menu-dropdown-button");
    feedDiv.innerHTML = `
        <div className="community-label">
        <img
            src=${feed.image}
            height="16px"
            width="16px"
            class="dropdown-image"
            alt="feed icon"
        />
        <span class="dropdown-button-text">${feed.name}</span>
        </div>
    `;
    document.getElementById("feeds").appendChild(feedDiv);
  });

  //add the other items to the menu
  let otherItems = [
    {
      name: "User Settings",
      image: "images/avatar.png",
    },
    {
      name: "Messages",
      image: "images/avatar.png",
    },
    {
      name: "Create Post",
      image: "images/icon-plus.svg",
    },
    {
      name: "Top Communities",
      image: "images/icon-top-comms.png",
    },
    {
      name: "Notifications",
      image: "images/icon-notifications.png",
    },
    {
      name: "Coins",
      image: "images/icon-coins.png",
    },
    {
      name: "Premium",
      image: "images/icon-premium.png",
    },
    {
      name: "Avatar",
      image: "images/icon-avatar.png",
    },
    {
      name: "Talk",
      image: "images/icon-talk.png",
    },
    {
      name: "Predictions",
      image: "images/icon-predictions.png",
    },
  ];

  otherItems.forEach((item) => {
    let itemDiv = document.createElement("a");
    itemDiv.classList.add("menu-dropdown-button");
    itemDiv.innerHTML = `
        <div className="community-label">
        <img
            src=${item.image}
            height="16px"
            width="16px"
            class="dropdown-image"
            alt="drop down icon"
        />
        <span class="dropdown-button-text">${item.name}</span>
        </div>
    `;
    document.getElementById("other").appendChild(itemDiv);
  });
};

//feed selection button creation
const createFeedSelectionButtons = () => {
  //add communities to menu
  let feeds = [
    {
      name: "Best",
      image: "icon-rocket.png",
    },
    {
      name: "Hot",
      image: "icon-hot.png",
    },
    {
      name: "New",
      image: "icon-badge.png",
    },
    {
      name: "Top",
      image: "icon-rising.png",
    },
    {
      name: "Rising",
      image: "icon-rising-arrow.png",
    },
  ];

  const updateSelection = (event) => {
    let bestButton = document.getElementById("select-best");
    let hotButton = document.getElementById("select-hot");
    let newButton = document.getElementById("select-new");
    let topButton = document.getElementById("select-top");
    let trendingButton = document.getElementById("select-trending");
    let elements = [
      bestButton,
      hotButton,
      newButton,
      topButton,
      trendingButton,
    ];

    //check if target includes any of the elements or their children
    if (
      elements.includes(event.target) ||
      elements.some((el) => el.contains(event.target))
    ) {
      elements.forEach((element) => {
        let mobileEl = document.getElementById(element.id + "-m");

        let imgEl = element.children[0];
        let imgElMobile = mobileEl.children[0];

        element.classList.remove(
          "feedButtonActive",
          "feedButtonInActive",
          "hide-below-672"
        );
        mobileEl.classList.remove("feedButtonActive", "feedButtonInActive");

        imgEl.classList.remove("active-feed-img");
        imgElMobile.classList.remove("active-feed-img");

        if (element.contains(event.target)) {
          element.classList.add("feedButtonActive");
          mobileEl.classList.add("feedButtonActive");
          imgEl.classList.add("active-feed-img");
          imgElMobile.classList.add("active-feed-img");
        } else {
          element.classList.add("feedButtonInActive", "hide-below-672");
          mobileEl.classList.add("feedButtonInActive");
        }
      });
    }
  };

  feeds.forEach((feed, i) => {
    let feedButton = document.createElement("button");
    //add id & classes to the button
    feedButton.id = `select-${feed.name.toLowerCase()}`;
    feedButton.classList.add("feedSelectionButton");
    if (i === 0) {
      feedButton.classList.add("feedButtonActive");
    }

    if (i > 0) {
      feedButton.classList.add("feedButtonInActive", "hide-below-672");
    }

    //add html to the button
    feedButton.innerHTML = `
        <img
            src="images/${feed.image}"
            width="28px"
            height="28px"
            class="icon-img-lg ${i === 0 ? "active-feed-img" : ""}"
            alt="feed icon"
        />
        <span class="feed-selection-text">${feed.name}</span>

        <img
            src="images/icon-caret-down.svg"
            width="14px"
            height="14px"
            class="active-feed-img feed-selection-caret"
            alt="caret down icon"
        />
    `;

    //set an event listener to detect clicks on feed selection buttons
    feedButton.addEventListener("click", function (event) {
      let screenWidth = window.innerWidth;
      if (screenWidth < 672) {
        //check if card-selection-icons-mobile is already open
        let el = document.getElementById("card-selection-icons-mobile");

        //adds a first open class to detect if the element has just opened
        el.classList.add("firstOpen");

        if (el.style.display === "none") {
          let location = feedButton.getBoundingClientRect();
          el.style.display = "inline-flex";
          el.style.top = location.top + 40 + "px";
          el.style.left = location.left + "px";
        }
      } else {
        let buttonCurrentlyActive =
          feedButton.classList.contains("feedButtonActive");

        if (!buttonCurrentlyActive) {
          //remove current feed
          let currentFeed = document.getElementById("feed-content");
          currentFeed.innerHTML = "";

          //get new feed and add it to the dom
          let feed = feedButton.children[1].innerText.toLowerCase();
          redditData(feed);

          //update the button
          updateSelection(event);
        }
      }
    });

    document.getElementById("card-selection-icons").appendChild(feedButton);
  });
};

const createFeedSelectionMobileMenu = () => {
  //add communities to menu
  let feeds = [
    {
      name: "Best",
      image: "icon-rocket.png",
    },
    {
      name: "Hot",
      image: "icon-hot.png",
    },
    {
      name: "New",
      image: "icon-badge.png",
    },
    {
      name: "Top",
      image: "icon-rising.png",
    },
    {
      name: "Trending",
      image: "icon-rising-arrow.png",
    },
  ];

  feeds.forEach((feed, i) => {
    let feedButton = document.createElement("button");
    //add id & classes to the button
    feedButton.id = `select-${feed.name.toLowerCase()}-m`;
    feedButton.classList.add("feedSelectionButton");
    if (i === 0) feedButton.classList.add("feedButtonActive");
    if (i > 0) feedButton.classList.add("feedButtonInActive");

    //add html to the button
    feedButton.innerHTML = `
        <img
            src="images/${feed.image}"
            width="28px"
            height="28px"
            class="icon-img-lg ${i === 0 ? "active-feed-img" : ""}"
            alt="feed icon"
        />
        <span class="feed-selection-text-mobile">${feed.name}</span>
    `;

    feedButton.addEventListener("click", function (event) {
      let bestButton = document.getElementById("select-best-m");
      let hotButton = document.getElementById("select-hot-m");
      let newButton = document.getElementById("select-new-m");
      let topButton = document.getElementById("select-top-m");
      let trendingButton = document.getElementById("select-trending-m");

      let elements = [
        bestButton,
        hotButton,
        newButton,
        topButton,
        trendingButton,
      ];

      //check if target includes any of the elements or their children
      if (
        elements.includes(event.target) ||
        elements.some((el) => el.contains(event.target))
      ) {
        elements.forEach((element) => {
          //capture desktop elements as well to make the necessary changes
          let desktopEl = document.getElementById(element.id.replace("-m", ""));

          let imgEl = element.children[0];
          let imgDesktopEl = desktopEl.children[0];

          element.classList.remove("feedButtonActive", "feedButtonInActive");
          desktopEl.classList.remove(
            "feedButtonActive",
            "feedButtonInActive",
            "hide-below-672"
          );

          imgEl.classList.remove("active-feed-img");
          imgDesktopEl.classList.remove("active-feed-img");

          if (element.contains(event.target)) {
            element.classList.add("feedButtonActive");
            desktopEl.classList.add("feedButtonActive");
            imgEl.classList.add("active-feed-img");
            imgDesktopEl.classList.add("active-feed-img");
          } else {
            element.classList.add("feedButtonInActive");
            desktopEl.classList.add("feedButtonInActive", "hide-below-672");
          }
        });

        //remove show from container
        let el = document.getElementById("card-selection-icons-mobile");
        el.style.display = "none";
      }
    });

    document
      .getElementById("card-selection-icons-mobile")
      .appendChild(feedButton);
  });
};

const createFeedLayoutMenu = () => {
  //add communities to menu
  let layouts = [
    {
      name: "Card",
      image: "icon-card.png",
    },
    {
      name: "Classic",
      image: "icon-classic.png",
    },
    {
      name: "Compact",
      image: "icon-compact.png",
    },
  ];

  layouts.forEach((layout, i) => {
    let layoutButton = document.createElement("button");
    //add id & classes to the button
    layoutButton.id = `select-${layout.name.toLowerCase()}`;
    layoutButton.classList.add("feedSelectionButton");

    if (i === 0) layoutButton.classList.add("feedButtonActive");
    if (i > 0) layoutButton.classList.add("feedButtonInActive");

    //add html to the button
    layoutButton.innerHTML = `
        <img
            src="images/${layout.image}"
            width="28px"
            height="28px"
            class="icon-img-lg ${i === 0 ? "active-feed-img" : ""}"
            alt="layout feed image"
        />
        <span class="feed-selection-text-mobile">${layout.name}</span>
    `;

    layoutButton.addEventListener("click", function (event) {
      let card = document.getElementById("select-card");
      let classic = document.getElementById("select-classic");
      let compact = document.getElementById("select-compact");
      let elements = [card, classic, compact];

      //check if target includes any of the elements or their children
      if (
        elements.includes(event.target) ||
        elements.some((el) => el.contains(event.target))
      ) {
        elements.forEach((element) => {
          let imgEl = element.children[0];
          element.classList.remove("feedButtonActive", "feedButtonInActive");
          imgEl.classList.remove("active-feed-img");

          if (element.contains(event.target)) {
            //update the button to active
            element.classList.add("feedButtonActive");
            imgEl.classList.add("active-feed-img");

            //select the main buttom
            let mainButton = document.getElementById("layout-selection-button");

            //selected the clicked elements text
            let buttonText = element.children[1].innerHTML.toLowerCase();
            let newImage = `images/icon-${buttonText}.png`;

            //update the main button image
            mainButton.children[0].src = newImage;
          } else {
            element.classList.add("feedButtonInActive");
          }
        });

        //remove show from container
        let el = document.getElementById("feed-selection-layout");
        el.style.display = "none";
      }
    });

    document.getElementById("feed-selection-layout").appendChild(layoutButton);
  });

  //listen for clicks on layout-selection-button
  document
    .getElementById("layout-selection-button")
    .addEventListener("click", function (event) {
      //check if card-selection-icons-mobile is already open
      let layoutMenu = document.getElementById("feed-selection-layout");
      let layoutButton = document.getElementById("layout-selection-button");

      //adds a first open class to detect if the element has just opened
      layoutMenu.classList.add("firstOpen");

      if (layoutMenu.style.display === "none") {
        let location = layoutButton.getBoundingClientRect();
        layoutMenu.style.display = "inline-flex";
        layoutMenu.style.top = location.top + 40 + "px";
        layoutMenu.style.left = location.left - 50 + "px";
      }
    });
};

const fetchRedditData = async (feed) => {
  //https://www.reddit.com/dev/api/
  return new Promise(async (res, rej) => {
    let url = `https://www.reddit.com/${feed}.json?limit=10`;
    let response = await fetch(url);
    let data = await response.json();

    let posts = data.data.children;

    res(posts);
  });
};

const parseFeedData = (feed) => {
  let posts = [];
  feed.forEach((item) => {
    let post = {
      id: item.data.id,
      title: item.data.title,
      author: item.data.author,
      subreddit: item.data.subreddit,
      upvotes: item.data.ups,
      comments: item.data.num_comments,
      text: item.data.selftext,
      url: item.data.url,
      date: item.data.created_utc,
      img: item.data.url_overridden_by_dest,
      preview: item.data.preview,
    };

    posts.push(post);
  });

  return posts;
};

const createCardsAndAddToDOM = (feed) => {
  const cleanUpvotes = (upvotes) => {
    if (upvotes <= 1) return "vote";
    else return createReadableNumber(upvotes);
  };

  const createReadableNumber = (number) => {
    let readableNumber = number;
    if (number > 1000) {
      readableNumber = (number / 1000).toFixed(1) + "k";
    } else if (number > 100000) {
      readableNumber = (number / 1000).toFixed(0) + "k";
    } else if (number > 1000000) {
      readableNumber = (number / 1000000).toFixed(1) + "m";
    } else if (number > 1000000000) {
      readableNumber = (number / 1000000000).toFixed(1) + "b";
    }

    return readableNumber;
  };

  feed.forEach((card, i) => {
    //the the data from the card object
    let { id, title, author, subreddit, upvotes, comments, text, date } = card;

    //create the card and add base elements
    let contentCard = document.createElement("div");
    contentCard.id = id;
    contentCard.classList.add("feed-card");

    let cleanedUpvotes = cleanUpvotes(upvotes);
    let cleanedComments = createReadableNumber(comments);

    let cardType = null;
    let imageLink = null;
    let imageHeight = null;
    let imageWidth = null;

    //check if card is a text based card
    let textComponent = "";
    if (text) {
      cardType = "text";
      textArray = text.split("\n\n");
      textArray.forEach((text) => {
        textComponent += `<p>${text}</p>`;
      });
    }

    //if not text generate an image
    if (!text) {
      //generate random number between 300 and 600
      let width = Math.floor(Math.random() * 300) + 300;
      let height = Math.floor(Math.random() * 300) + 300;
      imageLink = `https://picsum.photos/${width}/${height}`;
      imageHeight = height;
      imageWidth = width;

      if (width >= height) cardType = "image-landscape";
      else cardType = "image-portrait";
    }

    //count hours between datestring and now
    let hours = Math.floor((new Date() - date * 1000) / 1000 / 60 / 60);
    let datestring = `${hours} hour ago`;
    if (hours > 1) datestring = `${hours} hours ago`;
    if (hours > 24) datestring = `${Math.floor(hours / 24)} day ago`;
    if (hours > 24 * 2) datestring = `${Math.floor(hours / 24)} days ago`;

    let cardHtml = `
      <!-- Vote Counter -->
      <div class="feed-vote-couter">
        <!-- Top Arrow -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          id='upvote-${id}'
          class="feed-arrow-up"
          onclick="upvote('${id}')"
        >
          <path
            d="M21.707,11.293l-7-7A1,1,0,0,0,13,5V8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H13v3a1,1,0,0,0,1.707.707l7-7A1,1,0,0,0,21.707,11.293Z"
          />
        </svg>

        <!-- Vote Count -->
        <span class="feed-vote-count" id="vote-count-${id}">${cleanedUpvotes}</span>

        <!-- Bottom Arrow -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          id='downvote-${id}'
          class="feed-arrow-down"
          onclick="downvote('${id}')"
        >
          <path
            d="M21.707,11.293l-7-7A1,1,0,0,0,13,5V8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H13v3a1,1,0,0,0,1.707.707l7-7A1,1,0,0,0,21.707,11.293Z"
          />
        </svg>
      </div>

      <!-- Post Content -->
      <div class="feed-card-body">
        <div class="feed-post-data">
          <div class="subreddit-icon"></div>
          <a href="#" class="subreddit-name" aria-label="${subreddit}">r/${subreddit}</a>
          <p class="posted-by-time">Posted by 
            <a href="#" class='user-link' aria-label="${author}">u/${author}</a>
          </p>
          <p class="posted-by-time">${datestring}</p>
        </div>
        <p class="post-title">${title}</p>

        <!-- Post Image IF PORTRAIT IMAGE [this will be dynamic] -->
        ${
          cardType === "image-portrait"
            ? `
            <div class="post-image-container">
              <img
                src="${imageLink}"
                class="post-image-portrait"
                alt="post image"
                height="${imageHeight}"
                width="${imageWidth}"
              />
            </div>
            `
            : ``
        }

        <!-- Post Image IF LANDSCAPE IMAGE [this will be dynamic] -->
        ${
          cardType === "image-landscape"
            ? `
            <div class="post-image-container">
              <img
                src="${imageLink}"
                class="post-image-landscape"
                height="${imageHeight}"
                width="${imageWidth}"
                alt="post image"
              />
            </div>
            `
            : ``
        }


        <!-- Post Text IF TEXT CONTENT -->
        ${
          cardType === "text"
            ? `<div class="post-text-container">${textComponent}</div>`
            : ""
        }

        <!-- Post Stats -->
        <div class="post-stats-container">
          <!-- Comment -->
          <div class="post-stat-item">
            <img
              src="images/icon-comment.png"
              width="24px"
              height="24px"
              class="post-state-icon"
              alt="comment icon"
            />
            <p class="post-stat-label">${cleanedComments} Comments</p>
          </div>

          <!-- Award -->
          <div class="post-stat-item">
            <img
              src="images/icon-award.png"
              width="24px"
              height="24px"
              class="post-state-icon"
              alt="award icon"
            />
            <p class="post-stat-label">Award</p>
          </div>

          <!-- Share -->
          <div class="post-stat-item">
            <img
              src="images/icon-share.png"
              width="24px"
              height="24px"
              class="post-state-icon"
              alt="share icon"
            />
            <p class="post-stat-label">Share</p>
          </div>

          <!-- Ellipse -->
          <div class="post-stat-item">
            <img
              src="images/icon-post-ellipse.png"
              width="24px"
              height="24px"
              class="post-state-icon"
              alt="ellipse icon"
            />
          </div>
        </div>
      </div>
      `;

    contentCard.innerHTML = cardHtml;

    //add card to DOM
    let feedContainer = document.getElementById("feed-content");
    feedContainer.appendChild(contentCard);
  });
};

const redditData = async (feed) => {
  let data = await fetchRedditData(feed);
  let parsedData = parseFeedData(data);
  createCardsAndAddToDOM(parsedData);
};

//run functions necessary for page load
createDropDownMenu();
createFeedSelectionButtons();
createFeedSelectionMobileMenu();
createFeedLayoutMenu();
redditData("best");
