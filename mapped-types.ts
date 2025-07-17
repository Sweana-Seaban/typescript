// mapped-types
type User = {
    id: string,
    name: string,
    age: number,
}

// avoid repetion of code
type BasicUserDetails = {
    [K in keyof User]: User[K];
}