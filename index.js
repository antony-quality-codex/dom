export class DRef {
  constructor () {
    this._elm = undefined
  }

  elm () {
    if (this._elm === undefined) {
      throw new Error('DRef : no elm attached.')
    }

    return this._elm
  }
}

export const D = (tag, children, options, ref = undefined) => {
  const elm = document.createElement(tag)

  if (Array.isArray(children)) {
    elm.append(...children)
  } else {
    elm.append(children)
  }

  if (options instanceof DRef) {
    ref = options
  } else {
    if (options?.className) {
      elm.className = options?.className
    }
  }

  if (ref instanceof DRef) {
    ref._elm = elm
  }

  return elm
}

export const H1 = (children, options) => {
  return D('H1', children, options)
}
