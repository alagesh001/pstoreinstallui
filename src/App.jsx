import React, { useState } from "react";
import './index.css';
import appIcon from './assets/app-icon.png'; // Import app icon
import bkIcon from './assets/bookmark.svg';
import feature4 from './assets/abcd.png';

function App() {
  const [installing, setInstalling] = useState(false);
  const [installed, setInstalled] = useState(false);
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  console.log('✅ beforeinstallprompt event fired');
});
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});
const features = [
  { title: "VIDEO CALLS", image: feature4 },
  { title: "RANDOM PEOPLE", image: feature4 },
  { title: "INTERACTIONS", image: feature4 },
  { title: "FULL PRIVACY", image: feature4 },
];

const handleInstall = async () => {
  if (deferredPrompt) {
    setInstalling(true);
    deferredPrompt.prompt();

    const result = await deferredPrompt.userChoice;
    if (result.outcome === "accepted") {
      console.log("User accepted the PWA install prompt");
      setInstalled(true);
    } else {
      console.log("User dismissed the PWA install prompt");
    }

    setInstalling(false);
    deferredPrompt = null; // clear it after use
  } else {
    console.log("Install prompt not available");
    alert("App install prompt is not available right now.");
  }
};

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 font-sans w-screen">
      <div className="max-w-21 w-full flex items-start space-x-4">
        <img
          src={appIcon} // Use local image
          alt="App Icon"
          className="w-20 h-20 rounded-lg"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-medium">TimiLiveWeb - Live Streams Video Calls & Chats</h1>
          <p className="text-green-600 mt-4 font-semibold">Video Call App</p>
        </div>
      </div>

      <div className="flex justify-center items-center w-full mt-1 pt-6 text-center text-sm divide-x divide-gray-300">
        <div className="flex-1 px-4 py-1">
          <p className="font-bold">4.7★</p>
<p className="text-xs text-gray-500">48.7K reviews</p>
        </div>
        <div className="flex-1 px-4 py-1">
          <p className="font-bold">500K+</p>
          <p className="text-xs text-gray-500">Downloads</p>
        </div>
        <div className="flex-1 px-4 py-1">
          <span className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded text-xs">18</span>
          <p className="text-xs text-gray-500 mt-1">Rated for 18+</p>
        </div>
      </div>

      <button
        onClick={handleInstall}
        disabled={installing}
className={`mt-6 w-full bg-green-700 hover:bg-green-800 text-white py-2 px-2 rounded-lg text-base font-bold ${installing ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {installed ? "Open" : installing ? "Installing..." : "Install"}
      </button>

    <button className="mt-2 text-green-700 text-sm font-medium hover:underline mx-auto block font-semibold flex items-center gap-1">
  <img src={bkIcon} alt="Bookmark" className="w-4 h-4" />
  <span>Add to Wishlist</span>
</button>
 <div className="w-full max-w-2xl px-4 py-8">
      <h2 className="text-s font-medium mb-4 flex items-center gap-2">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6"></path>
        </svg>
        This app is available for your device
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="bg-gradient-to-b from-purple-500 to-blue-400 rounded-xl p-2 shadow-md">
            <img src={feature.image} alt={feature.title} className="rounded-lg w-full" />
            <div className="mt-2 text-white text-sm font-semibold text-center">
              {feature.title}
            </div>
          </div>
        ))}
      </div>
    </div>
        <div className="max-w-21 w-full   px-1 py-6 space-y-6 text-gray-800">
      <section>
        <h2 className="text-xl font-semibold">About this app</h2>
        <p className="text-s mt-1">Top App in Entertainment! Watch and download new hot videos every day 🔥🔥🔥</p>
      </section>

      <section>
        <h3 className="font-medium">Updated on</h3>
        <p className="text-s text-gray-500">Feb 7, 2023</p>
      </section>

      <section>
        <h3 className="font-medium">Data safety</h3>
        <p className="text-s text-gray-500">
          Developers can show information here about how their app collects and uses your data.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Ratings and reviews</h2>
        <p className="text-sm text-gray-500">Ratings and reviews are verified</p>

        <div className="mt-4 flex items-center space-x-4">
          <div className="text-5xl font-bold">4.6</div>
          <div className="text-green-600 text-sm">★★★★★</div>
          <p className="text-gray-500 text-sm">48.7K reviews</p>
        </div>

        <div className="mt-6 space-y-4">
          <Review
            name="Sanjay Kumar"
            date="January 30, 2022"
            comment="This app is so good! We are waiting for new HOT content!"
          />
          <Review
            name="Eduard Tereshko"
            date="April 22, 2022"
            comment="High quality content! After watching the first video, it is impossible to stop at the second"
          />
          <Review
            name="Asha Devi"
            date="March 19, 2022"
            comment="I'm really loving this app. 💦💦💦"
          />
        </div>
      </section>
    </div>
    </div>
  );
}
function Review({ name, date, comment }) {
  return (
    <div className="border-t pt-4">
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-green-600">★★★★★</p>
      <p className="text-xs text-gray-500">{date}</p>
      <p className="mt-1">{comment}</p>
    </div>
  );
}
export default App;