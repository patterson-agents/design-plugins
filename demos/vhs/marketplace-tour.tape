# demos/vhs/marketplace-tour.tape — browse the whole marketplace.
# Render:  vhs demos/vhs/marketplace-tour.tape

Output demos/vhs/gif/marketplace-tour.gif

Set Shell "bash"
Set FontSize 15
Set Width 1180
Set Height 640
Set Padding 24
Set Theme { "name": "patterson", "background": "#001c34", "foreground": "#dceefb", "cursor": "#00a8e1", "selection": "#147ec2", "black": "#0b2a45", "red": "#ff7a7a", "green": "#7bc24d", "yellow": "#ffd479", "blue": "#00a8e1", "magenta": "#b48ede", "cyan": "#5ad1e6", "white": "#eef6fb", "brightBlack": "#3d5a75", "brightRed": "#ff9d9d", "brightGreen": "#9ad97a", "brightYellow": "#ffe3a3", "brightBlue": "#57c8f0", "brightMagenta": "#cbaef0", "brightCyan": "#8ce1f2", "brightWhite": "#ffffff" }
Set TypingSpeed 45ms

Type "claude"
Sleep 500ms
Enter
Sleep 3s
Type "/plugin marketplace add patterson-agents/design-system"
Sleep 800ms
Enter
Sleep 2.5s
Type "/plugin"
Sleep 1s
Enter
Sleep 4s
Down Sleep 500ms Down Sleep 500ms Down Sleep 1s
Escape
Type "/plugin install patterson-brand@patterson-design"
Sleep 800ms
Enter
Sleep 3s
