import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export function useSEO() {
  const route = useRoute()

  const updateMetaTags = (seoData) => {
    // Update title
    if (seoData.title) {
      document.title = seoData.title
    }

    // Update meta description
    updateMetaTag('description', seoData.description)

    // Update meta keywords
    updateMetaTag('keywords', seoData.keywords)

    // Update Open Graph tags
    updateMetaProperty('og:title', seoData.title)
    updateMetaProperty('og:description', seoData.description)
    updateMetaProperty('og:image', seoData.image)
    updateMetaProperty('og:url', seoData.url || window.location.href)

    // Update Twitter Card tags
    updateMetaProperty('twitter:title', seoData.title)
    updateMetaProperty('twitter:description', seoData.description)
    updateMetaProperty('twitter:image', seoData.image)
    updateMetaProperty('twitter:url', seoData.url || window.location.href)
  }

  const updateMetaTag = (name, content) => {
    if (!content) return

    let metaTag = document.querySelector(`meta[name="${name}"]`)
    if (!metaTag) {
      metaTag = document.createElement('meta')
      metaTag.setAttribute('name', name)
      document.head.appendChild(metaTag)
    }
    metaTag.setAttribute('content', content)
  }

  const updateMetaProperty = (property, content) => {
    if (!content) return

    let metaTag = document.querySelector(`meta[property="${property}"]`)
    if (!metaTag) {
      metaTag = document.createElement('meta')
      metaTag.setAttribute('property', property)
      document.head.appendChild(metaTag)
    }
    metaTag.setAttribute('content', content)
  }

  return {
    updateMetaTags,
  }
}