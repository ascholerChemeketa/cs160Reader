let ltiResizeListenerInstalled = false;

function installLTIResizer() {
  if (ltiResizeListenerInstalled) return;
  ltiResizeListenerInstalled = true;
  function getHeightWithMargin(element) {
    const height = element.offsetHeight; 
    const styles = window.getComputedStyle(element); 
    const marginTop = parseFloat(styles.marginTop);
    const marginBottom = parseFloat(styles.marginBottom);
    return height + marginTop + marginBottom;
  }
  let requestSizeChangeForLTI = function() {
    if(!window.frameElement) return;
    const height = getHeightWithMargin(document.body) + 1;
    const data = { subject: 'lti.frameResize', message_id: window.frameElement.id, height: height }
    window.parent.postMessage(data, '*')
  };
  window.addEventListener('resize', requestSizeChangeForLTI);
  requestSizeChangeForLTI();
}
document.addEventListener("DOMContentLoaded", function() {
  installLTIResizer();
});