export interface ITargetDataSet extends EventTarget {
  dataset?: Record<"imgindex", string>
  firstChild?: Record<"classList", string[]>
}
