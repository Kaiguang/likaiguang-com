---
title: 'Karabiner-Elements Complex Modifications'
date: '2022-07-21'
tags:
  - macOS
  - config
---

Sometimes my hands don't want to move over to touch my mouse or trackpad, but how can I still move my cursor and click around?

Sometimes I use a combination of 4 modifier keys for a shortcut, and it's hard to press all 4 buttons at the same time, can I just assign a hyper key to achieve this?

[Karabiner-Elements](https://karabiner-elements.pqrs.org/) lets me customize my keyboard to do these.

- [**hyper key**](#hyper-key): hold <kbd>caps_lock</kbd> for hyper key, tap it to use the actual <kbd>caps_lock</kbd>
- [**mouse keys**](#mouse-keys): use keyboard to move the cursor and scroll around

## hyper key

Hold <kbd>caps_lock</kbd> to trigger <kbd>shift</kbd> + <kbd>control</kbd> + <kbd>option</kbd> + <kbd>command</kbd> modifier combo for various shortcuts, for example:

- <kbd>caps_lock</kbd> + <kbd>1</kbd> for Google Chrome
- <kbd>caps_lock</kbd> + <kbd>2</kbd> for iTerm
- <kbd>caps_lock</kbd> + <kbd>3</kbd> for Visual Studio Code
- <kbd>caps_lock</kbd> + <kbd>4</kbd> for Slack
- For more examples check the `rules` in the JSON below with `"description": "hyper keys"`

Press <kbd>caps_lock</kbd> alone to lock / unlock caps.

## mouse keys

Press <kbd>hyper_key</kbd> + <kbd>q</kbd> to enter the mouse keys mode.

In the mouse keys mode:

- Press <kbd>wasd</kbd> to move the cursor
- Press <kbd>ijkl</kbd> to scroll
- Hold <kbd>left_shift</kbd> to 5x the movement or scrolling speed
- Hold <kbd>p</kbd> to 10x the movement or scrolling speed
- Press <kbd>u</kbd> to left click
- Press <kbd>o</kbd> to right click
- Press <kbd>,</kbd> to middle click
- Press <kbd>q</kbd> to quit the mouse keys mode

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
      "description": "hyper keys",
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
              "modifiers": ["shift", "control", "option"]
            }
          ],
          "to_if_alone": [{ "key_code": "caps_lock" }]
        },
        {
          "type": "basic",
          "from": {
            "key_code": "1",
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
            "key_code": "2",
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
            "key_code": "3",
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
            "key_code": "4",
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
            "key_code": "5",
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
          "type": "basic",
          "from": {
            "key_code": "i",
            "modifiers": {
              "mandatory": ["shift", "control", "option", "command"]
            }
          },
          "to": [
            {
              "key_code": "up_arrow"
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
              "key_code": "down_arrow"
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
              "key_code": "left_arrow"
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
              "key_code": "right_arrow"
            }
          ]
        }
      ]
    },
    {
      "description": "mouse keys mode",
      "manipulators": [
        {
          "type": "basic",
          "from": {
            "key_code": "q",
            "modifiers": {
              "mandatory": ["shift", "control", "option", "command"]
            }
          },
          "to": [
            {
              "set_variable": {
                "name": "mouse_keys_mode",
                "value": 1
              }
            },
            {
              "set_notification_message": {
                "id": "mouse_keys_mode",
                "text": "mouse keys mode"
              }
            }
          ]
        },
        {
          "type": "basic",
          "from": {
            "key_code": "q",
            "modifiers": { "optional": ["any"] }
          },
          "to": [
            {
              "set_variable": {
                "name": "mouse_keys_mode",
                "value": 0
              }
            },
            {
              "set_notification_message": {
                "id": "mouse_keys_mode",
                "text": ""
              }
            }
          ],
          "conditions": [
            {
              "type": "variable_if",
              "name": "mouse_keys_mode",
              "value": 1
            }
          ]
        },

        {
          "type": "basic",
          "from": {
            "key_code": "w",
            "modifiers": {
              "optional": ["any"]
            }
          },
          "to": [{ "mouse_key": { "y": -700 } }],
          "conditions": [
            {
              "type": "variable_if",
              "name": "mouse_keys_mode",
              "value": 1
            }
          ]
        },
        {
          "type": "basic",
          "from": {
            "key_code": "a",
            "modifiers": {
              "optional": ["any"]
            }
          },
          "to": [{ "mouse_key": { "x": -700 } }],
          "conditions": [
            {
              "type": "variable_if",
              "name": "mouse_keys_mode",
              "value": 1
            }
          ]
        },
        {
          "type": "basic",
          "from": {
            "key_code": "s",
            "modifiers": {
              "optional": ["any"]
            }
          },
          "to": [{ "mouse_key": { "y": 700 } }],
          "conditions": [
            {
              "type": "variable_if",
              "name": "mouse_keys_mode",
              "value": 1
            }
          ]
        },
        {
          "type": "basic",
          "from": {
            "key_code": "d",
            "modifiers": {
              "optional": ["any"]
            }
          },
          "to": [{ "mouse_key": { "x": 700 } }],
          "conditions": [
            {
              "type": "variable_if",
              "name": "mouse_keys_mode",
              "value": 1
            }
          ]
        },

        {
          "type": "basic",
          "from": {
            "key_code": "left_shift",
            "modifiers": {
              "optional": ["any"]
            }
          },
          "to": [{ "mouse_key": { "speed_multiplier": 5.0 } }],
          "conditions": [
            {
              "type": "variable_if",
              "name": "mouse_keys_mode",
              "value": 1
            }
          ]
        },
        {
          "type": "basic",
          "from": {
            "key_code": "p",
            "modifiers": {
              "optional": ["any"]
            }
          },
          "to": [{ "mouse_key": { "speed_multiplier": 10.0 } }],
          "conditions": [
            {
              "type": "variable_if",
              "name": "mouse_keys_mode",
              "value": 1
            }
          ]
        },

        {
          "type": "basic",
          "from": {
            "key_code": "u",
            "modifiers": {
              "optional": ["any"]
            }
          },
          "to": [{ "pointing_button": "button1" }],
          "conditions": [
            {
              "type": "variable_if",
              "name": "mouse_keys_mode",
              "value": 1
            }
          ]
        },
        {
          "type": "basic",
          "from": {
            "key_code": "o",
            "modifiers": {
              "optional": ["any"]
            }
          },
          "to": [{ "pointing_button": "button2" }],
          "conditions": [
            {
              "type": "variable_if",
              "name": "mouse_keys_mode",
              "value": 1
            }
          ]
        },
        {
          "type": "basic",
          "from": {
            "key_code": "comma",
            "modifiers": {
              "optional": ["any"]
            }
          },
          "to": [{ "pointing_button": "button3" }],
          "conditions": [
            {
              "type": "variable_if",
              "name": "mouse_keys_mode",
              "value": 1
            }
          ]
        },

        {
          "type": "basic",
          "from": {
            "key_code": "i",
            "modifiers": {
              "optional": ["any"]
            }
          },
          "to": [{ "mouse_key": { "vertical_wheel": -64 } }],
          "conditions": [
            {
              "type": "variable_if",
              "name": "mouse_keys_mode",
              "value": 1
            }
          ]
        },
        {
          "type": "basic",
          "from": {
            "key_code": "j",
            "modifiers": {
              "optional": ["any"]
            }
          },
          "to": [{ "mouse_key": { "horizontal_wheel": -64 } }],
          "conditions": [
            {
              "type": "variable_if",
              "name": "mouse_keys_mode",
              "value": 1
            }
          ]
        },
        {
          "type": "basic",
          "from": {
            "key_code": "k",
            "modifiers": {
              "optional": ["any"]
            }
          },
          "to": [{ "mouse_key": { "vertical_wheel": 64 } }],
          "conditions": [
            {
              "type": "variable_if",
              "name": "mouse_keys_mode",
              "value": 1
            }
          ]
        },
        {
          "type": "basic",
          "from": {
            "key_code": "l",
            "modifiers": {
              "optional": ["any"]
            }
          },
          "to": [{ "mouse_key": { "horizontal_wheel": 64 } }],
          "conditions": [
            {
              "type": "variable_if",
              "name": "mouse_keys_mode",
              "value": 1
            }
          ]
        },

        {
          "type": "basic",
          "from": {
            "key_code": "h",
            "modifiers": {
              "optional": ["any"]
            }
          },
          "to": [
            {
              "software_function": {
                "set_mouse_cursor_position": {
                  "x": "50%",
                  "y": "50%"
                }
              }
            }
          ],
          "conditions": [
            {
              "type": "variable_if",
              "name": "mouse_keys_mode",
              "value": 1
            }
          ]
        }
      ]
    }
  ]
}
```

</details>
