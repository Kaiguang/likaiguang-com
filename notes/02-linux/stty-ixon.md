# stty -ixon

Weird knowledge increases as I keep using Linux.

`man stty` to find out what it does.

Wtih `stty ixon`, the **START/STOP output control** gets enabled, the terminal pauses when pressing <kbd>ctrl</kbd>+<kbd>s</kbd>, and resumes when pressing <kbd>ctrl</kbd>+<kbd>q</kbd>.

With `stty -ixon`, the **START/STOP output control** gets disabled.
