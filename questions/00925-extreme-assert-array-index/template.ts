function assertArrayIndex(array: readonly unknown[], key: string) {}

// 不会（简单明了）
type Index<Array> = any
