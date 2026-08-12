# demos/vhs/patterson-corporate-page.tape — GitHub Copilot-style terminal demo for the patterson-corporate-page plugin.
# Render the GIF with charmbracelet/vhs:  vhs demos/vhs/patterson-corporate-page.tape
# (VHS: https://github.com/charmbracelet/vhs — brew install vhs)

Output demos/vhs/gif/patterson-corporate-page.gif

Set Shell "bash"
Set FontSize 15
Set Width 1180
Set Height 640
Set Padding 24
Set Theme { "name": "patterson", "background": "#001c34", "foreground": "#dceefb", "cursor": "#00a8e1", "selection": "#147ec2", "black": "#0b2a45", "red": "#ff7a7a", "green": "#7bc24d", "yellow": "#ffd479", "blue": "#00a8e1", "magenta": "#b48ede", "cyan": "#5ad1e6", "white": "#eef6fb", "brightBlack": "#3d5a75", "brightRed": "#ff9d9d", "brightGreen": "#9ad97a", "brightYellow": "#ffe3a3", "brightBlue": "#57c8f0", "brightMagenta": "#cbaef0", "brightCyan": "#8ce1f2", "brightWhite": "#ffffff" }
Set TypingSpeed 45ms

Hide
Type "cd ~/patterson-design-marketplace && clear" Enter
Show

# Start Claude Code
Type "claude"
Sleep 500ms
Enter
Sleep 3s

# One-time: register this checkout as a local marketplace
Type "/plugin marketplace add ."
Sleep 800ms
Enter
Sleep 2s

# Install the plugin
Type "/plugin install patterson-corporate-page@patterson-design"
Sleep 800ms
Enter
Sleep 2.5s

# Run its slash command
Type "/patterson-corporate-page:new-page careers landing page with stats band"
Sleep 1s
Enter
Sleep 8s

Sleep 2s
