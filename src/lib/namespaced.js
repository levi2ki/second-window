import curryN from 'ramda/src/curryN'

export default curryN(2, (ns, action) => `${ns}/${action}`)
