# Custom Hooks

These are various custom hooks that I've created or curated for my own use.

## useTime

This hook returns the current time and updates every second.

```jsx
const time = useTime();
```

## useHotKeys

This hook allows you to bind multiple callbacks to multiple hot keys. It accepts an array of objects with the following properties:

- `hotKey` - The shortcut to bind to. It can be a single character, or a combination of modifier keys and a character separated by `+`. For example, `a`, `ctrl+a`, `ctrl+shift+a`, `ctrl+alt+shift+a`, etc. It supports AutoHotKey syntax. (eg. `^a` for `ctrl+a`, `!a` for `alt+a`, `+a` for `shift+a`, etc.)
- `run` - The callback to call when the hot key is pressed.
- `universal` - Whether or not the hot key is the same across all keyboard layouts. Defaults to `false`.

The hook accepts an optional second parameter, which is the ref element to bind the hot keys to. You can use this to scope the hot keys to a specific element. You can assign the same hot key to multiple elements, and the hot key will only be triggered when the element is focused, preventing event bubbling.
If not provided, the hot keys will be bound to the `window` object.

The hook returns an array of hot keys that are currently bound.

```jsx
const formRef = useRef();
useHotKeys(
  [
    {
      hotKey: 'Escape',
      run: clearInput,
    },
    {
      hotKey: 'Ctrl+Shift+a',
      run: () => console.log('ctrl+shift+a pressed'),
      universal: true, // works across all keyboard layouts. (eg. ctrl+shift+a on a US keyboard is the same as ctrl+shift+ش on an Arabic keyboard.)
    },
  ],
  formRef
);

return (
  <form ref={formRef}>
    <input type='text' />
  </form>
);
```
