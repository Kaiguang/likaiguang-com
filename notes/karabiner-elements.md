---
title: 'Karabiner-Elements Complex Modifications'
date: '2022-07-21'
tags:
  - macOS
  - config
---

Sometimes my hands don't want to move over to touch my mouse or trackpad, but how can I still move my cursor and click around?

[Karabiner-Elements](https://karabiner-elements.pqrs.org/) lets me customize my keyboard to do that.

## Mouse Keys Mode Kai

### How to Use

Press <kbd>asd</kbd> simultaneously to enter the Mouse Keys Mode.

In the Mouse Keys Mode:

- Press <kbd>wasd</kbd> to move the cursor
- Press <kbd>ijkl</kbd> to scroll
- Hold <kbd>left_shift</kbd> to 5x the movement or scrolling speed
- Hold <kbd>p</kbd> to 10x the movement or scrolling speed
- Press <kbd>u</kbd> to left click
- Press <kbd>o</kbd> to right click
- Press <kbd>,</kbd> to middle click
- Press <kbd>q</kbd> to quit the Mouse Keys Mode

### How to Install

1. Install Karabiner-Elements
2. Create a JSON file `~/.config/karabiner/assets/complex_modifications/mouse-keys-mode-kai.json` with the content shown below
3. Add the Complex Modifications rules in the Karabiner-Elements Preferences

### Mouse Keys Mode Kai JSON

```json
{
  "title": "Mouse Keys Mode Kai",
  "rules": [
    {
      "description": "Mouse Keys Mode Kai",
      "manipulators": [
        {
          "type": "basic",
          "from": {
            "modifiers": {
              "optional": ["any"]
            },
            "simultaneous": [
              {
                "key_code": "a"
              },
              {
                "key_code": "s"
              },
              {
                "key_code": "d"
              }
            ]
          },
          "to": [
            {
              "set_variable": {
                "name": "mouse_keys_mode_kai",
                "value": 1
              }
            },
            {
              "set_notification_message": {
                "id": "mouse_keys_mode_kai",
                "text": "Mouse Keys Mode Kai"
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
                "name": "mouse_keys_mode_kai",
                "value": 0
              }
            },
            {
              "set_notification_message": {
                "id": "mouse_keys_mode_kai",
                "text": ""
              }
            }
          ],
          "conditions": [
            {
              "type": "variable_if",
              "name": "mouse_keys_mode_kai",
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
              "name": "mouse_keys_mode_kai",
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
              "name": "mouse_keys_mode_kai",
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
              "name": "mouse_keys_mode_kai",
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
              "name": "mouse_keys_mode_kai",
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
              "name": "mouse_keys_mode_kai",
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
              "name": "mouse_keys_mode_kai",
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
              "name": "mouse_keys_mode_kai",
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
              "name": "mouse_keys_mode_kai",
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
              "name": "mouse_keys_mode_kai",
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
              "name": "mouse_keys_mode_kai",
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
              "name": "mouse_keys_mode_kai",
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
              "name": "mouse_keys_mode_kai",
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
              "name": "mouse_keys_mode_kai",
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
              "name": "mouse_keys_mode_kai",
              "value": 1
            }
          ]
        }
      ]
    }
  ]
}
```
