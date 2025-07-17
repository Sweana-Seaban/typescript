type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

// immediately indexed mapped types
type Actions = {
    login: {
        username: string;
        password: string;
    };
    logout: { reason: string };
    update: { id: string; data: unknown };
};

type ActionUnion = {
    [K in keyof Actions]: Prettify<{
        type: K
    } & Actions[K]
    >;
}[keyof Actions];
/* [keyof Actions] grabs all the values
in key-value pairs of Actions
*/

/* [K in keyof Actions]: Prettify<{
        type: K
    } & Actions[K]
    >
this is creating a mapped type from Actions
*/