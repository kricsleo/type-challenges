type GetTags<B> = any

type Tag<B, T extends string> = any

type UnTag<B> = any

// todo: 不会（简单明了）
type HasTag<B, T extends string> = any
type HasTags<B, T extends readonly string[]> = any
type HasExactTags<B, T extends readonly string[]> = any
