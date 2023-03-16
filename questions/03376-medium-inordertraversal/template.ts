interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
type InorderTraversal<T extends TreeNode | null> = 
  T extends TreeNode 
    // wonderful! 简单，「分治」思想简单直接
    ? [
      ...(T['left'] extends TreeNode ? InorderTraversal<T['left']> : []),
      T['val'],
      ...(T['right'] extends TreeNode ? InorderTraversal<T['right']> : []),
    ]
    : []
