import React, { PureComponent } from 'react';

const transparentImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

/**
 * Using localStorage to memorize the compatibility test results.
 * So you don't need to test again every time you visite the site.
 */
let compatibilityInfo = JSON.parse(localStorage.getItem('thisBrowserWebpCompatibilty'));

class ImageWebp extends PureComponent {

  actualSrc = null;

  componentDidMount = () => {

    /**
     * this.actualSrc === transparentImage signs we have to test compatibility.
     */
    if (this.actualSrc !== transparentImage) return;
    
    /**
     * compatibilityInfo is common for all ImageWebp components in the project.
     * Here it may already been set by another ImageWebp component.
     */
    if (!compatibilityInfo) this._compatibilityTest();

    this.forceUpdate();

  }

  _compatibilityTest = () => {

    /**
     * Test images data from https://developers.google.com/speed/webp/faq#how_can_i_detect_browser_support_for_webp
     */
    const webpTestImages = {
      lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
      lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
      alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
      animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
    };

    compatibilityInfo = {};

    Object.keys(webpTestImages).forEach(type => {

      /**
       * Testing compatibility for this type
       */
      const xqImg = new Image();
      xqImg.onload = () => {

        compatibilityInfo[type] = (xqImg.width > 0) && (xqImg.height > 0);
        localStorage.setItem('thisBrowserWebpCompatibilty', JSON.stringify(compatibilityInfo));

      }
      xqImg.onerror = () => {
        
        compatibilityInfo[type] = false;
        localStorage.setItem('thisBrowserWebpCompatibilty', JSON.stringify(compatibilityInfo));

      }
      xqImg.src = `data:image/webp;base64,${webpTestImages[type]}`;

    });

  }

  _onLoad = (e) => {
    
    const { onLoad } = this.props;
    if (onLoad && e.target.src !== transparentImage) onLoad(e);

  }

  _onMouseMove = (e) => {
    
    const { onMouseMove } = this.props;
    if (onMouseMove && e.target.src !== transparentImage) onMouseMove(e);

  }

  _onMouseLeave = (e) => {
    
    const { onMouseLeave } = this.props;
    if (onMouseLeave && e.target.src !== transparentImage) onMouseLeave(e);

  }

  render() {

    const {
      src,
      srcWebp = null,
      className = null,
      style = null,
      width = null,
      height = null,
      alt = '',
    } = this.props;

    if (!srcWebp) {
      
      this.actualSrc = src;
    
    } else if (compatibilityInfo) {

      if (srcWebp.lastIndexOf('.png') === srcWebp.length - 4) {

        this.actualSrc = compatibilityInfo.alpha ? srcWebp : src;

      } else {

        this.actualSrc = compatibilityInfo.lossy ? srcWebp : src;

      }

    } else {

      /**
       * Compatibility test not done yet, it will be done in componentDidMount()
       * 
       * For now let's render a transparent image.
       * 
       * this.actualSrc = transparentImage will also sign to
       * componentDidMount() the need for the compatibility test
       */
      this.actualSrc = transparentImage;

    }

    return (
      <img
        src={this.actualSrc}
        className={className}
        style={style}
        onLoad={this._onLoad}
        onMouseMove={this._onMouseMove}
        onMouseLeave={this._onMouseLeave}
        alt={alt}
        width={width}
        height={height}
      />
    );

  }

}

export default ImageWebp;