function Noop () {
  this.calls = []
  this.constructed = new Date()
}

Noop.prototype.noop = function () {
  this.calls.push({ time: new Date() })
  return undefined
}

global.NoopSingleton = new Noop()
