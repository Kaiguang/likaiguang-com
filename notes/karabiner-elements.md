---
title: 'Karabiner-Elements Complex Modifications'
date: '2022-07-21'
tags:
  - macOS
  - config
---

Hardly any software uses a combination of 4 modifier keys (shift + control + option + command) for a shortcut, and it's hard to press all 4 keys at the same time,

With [Karabiner-Elements](https://karabiner-elements.pqrs.org/) I can change <kbd>caps_lock</kbd> to a hyper key to do this.

## hyper key

Hold <kbd>caps_lock</kbd> to trigger <kbd>shift</kbd> + <kbd>control</kbd> + <kbd>option</kbd> + <kbd>command</kbd> modifier combo for various shortcuts, for example:

- <kbd>caps_lock</kbd> + <kbd>h</kbd> for Google Chrome
- <kbd>caps_lock</kbd> + <kbd>j</kbd> for iTerm
- <kbd>caps_lock</kbd> + <kbd>k</kbd> for Visual Studio Code
- <kbd>caps_lock</kbd> + <kbd>l</kbd> for Slack
- <kbd>caps_lock</kbd> + <kbd>;</kbd> for Zoom
- For more examples check the `rules` in the JSON below with `"description": "hyper-key"`

Press <kbd>caps_lock</kbd> alone to lock / unlock caps.

## How to Install

1. Install Karabiner-Elements
2. Create a JSON file `~/.config/karabiner/assets/complex_modifications/k-complex-mods.json` with the JSON below
3. Add the Complex Modifications rules in the Karabiner-Elements Preferences

<details>
<summary>click to show JSON</summary>

```json
{
  "title": "k-complex-mods",
  "rules": [
    {
      "description": "hyper-key",
      "manipulators": [
        {
          "type": "basic",
          "from": {
            "key_code": "caps_lock",
            "modifiers": { "optional": ["any"] }
          },
          "to": [
            {
              "key_code": "left_command",
              "modifiers": ["left_shift", "left_control", "left_option"]
            }
          ],
          "to_if_alone": [{ "key_code": "caps_lock" }]
        },
        {
          "type": "basic",
          "from": {
            "key_code": "h",
            "modifiers": {
              "mandatory": ["shift", "control", "option", "command"]
            }
          },
          "to": [
            {
              "shell_command": "open -a 'Google Chrome'"
            }
          ]
        },
        {
          "type": "basic",
          "from": {
            "key_code": "j",
            "modifiers": {
              "mandatory": ["shift", "control", "option", "command"]
            }
          },
          "to": [
            {
              "shell_command": "open -a 'iTerm'"
            }
          ]
        },
        {
          "type": "basic",
          "from": {
            "key_code": "k",
            "modifiers": {
              "mandatory": ["shift", "control", "option", "command"]
            }
          },
          "to": [
            {
              "shell_command": "open -a 'Visual Studio Code'"
            }
          ]
        },
        {
          "type": "basic",
          "from": {
            "key_code": "l",
            "modifiers": {
              "mandatory": ["shift", "control", "option", "command"]
            }
          },
          "to": [
            {
              "shell_command": "open -a 'Slack'"
            }
          ]
        },
        {
          "type": "basic",
          "from": {
            "key_code": "semicolon",
            "modifiers": {
              "mandatory": ["shift", "control", "option", "command"]
            }
          },
          "to": [
            {
              "shell_command": "open -a 'zoom.us'"
            }
          ]
        },
        {
          "description": "Map cmd+tab to option+tab, to use the Raycast window switcher instead of the macOS application switcher.",
          "type": "basic",
          "from": {
            "key_code": "tab",
            "modifiers": {
              "mandatory": ["command"]
            }
          },
          "to": [
            {
              "key_code": "tab",
              "modifiers": ["left_option"]
            }
          ]
        }
      ]
    }
  ]
}
```

</details>
