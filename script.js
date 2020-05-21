chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
  hideDetails(message.showDetails);
});

hideDetails = (showDetails) => {
  //console.log("%cnetflix-subtitles-styler : observer is working... ", "color: red;");
  callback = () => {
    // .player-timedText
    const synopsis = document.querySelector(".nfp-episode-preview .synopsis")
    console.log(showDetails)
    if(showDetails === "true" && synopsis){
        synopsis.style.display = "none"
    }
    // if (subtitles) {
    //   subtitles.style.bottom = vPos + "px";

    //   // .player-timedtext > .player-timedtext-container [0]
    //   const firstChildContainer = subtitles.firstChild;
    //   if (firstChildContainer) {
    //     // .player-timedtext > .player-timedtext-container [0] > div
    //     const firstChild = firstChildContainer.firstChild;
    //     if (firstChild) {
    //       firstChild.style.backgroundColor = "transparent";
    //     }

    //     // .player-timedtext > .player-timedtext-container [1]
    //     const secondChildContainer = firstChildContainer.nextSibling;
    //     if (secondChildContainer) {
    //       for (const span of secondChildContainer.childNodes) {
    //         // .player-timedtext > .player-timedtext-container [1] > span
    //         span.style.fontSize = fSize + "px";
    //         span.style.fontWeight = "normal";
    //         span.style.color = fColor;
    //       }
    //       secondChildContainer.style.left = "0";
    //       secondChildContainer.style.right = "0";
    //     }
    //   }
    // }
  };

  const observer = new MutationObserver(callback);
  observer.observe(document.body, {
    subtree: true,
    attributes: false,
    childList: true
  });
};