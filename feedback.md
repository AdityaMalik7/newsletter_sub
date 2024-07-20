General:

1. Never include node_modules in git. Add node_modules to .gitignore.

Button Fix:

1. Remove `h-13` from Button class to let it expand to full height.
2. Remove `items-center` from the flex parent of Button. `items-center` property centers the flex children vertically. By removing it, we're ensuring the flexbox has `items-stretch` property, which stretches it's children to full height.

Others:
Please find other changes in the commit history.
