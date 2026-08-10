# Utility Scripts Documentation

## `compile_all.sh`

**Location:** `/compile_all.sh`  
**Type:** Bash shell script  
**Purpose:** Batch-compile and run all lab programs from the repository root.

### Usage

```bash
./compile_all.sh        # Run all labs (1 through 6)
./compile_all.sh 1      # Lab 1 only
./compile_all.sh 2      # Lab 2 only
./compile_all.sh 3      # Lab 3 only
./compile_all.sh 4      # Lab 4 only
./compile_all.sh 5      # Lab 5 only
./compile_all.sh 6      # Lab 6 only (compile only; prints run commands)
```

### Behavior by Lab

| Lab | Compile Strategy | Run Behavior |
|-----|------------------|--------------|
| Lab 1 | `javac` each `Program*.java` in `Lab_1/` | Runs immediately after compile |
| Lab 2 | Same pattern in `Lab_2/` | Runs immediately after compile |
| Lab 3 | Same pattern in `Lab_3/` | Runs immediately after compile |
| Lab 4 | `cd` into each `Program*/` subfolder, compile all `.java` files | Runs main class |
| Lab 5 | Same pattern as Lab 1 | Runs immediately after compile |
| Lab 6 | Compiles GUI programs | Prints run command (does not auto-launch windows) |

### Requirements

- `javac` and `java` must be on the system `PATH`
- Execute permission: `chmod +x compile_all.sh`

### Notes

- Lab 6 programs open GUI windows; the script only compiles them and prints the `java` command to avoid blocking on window interaction.
- Lab 4 programs must be compiled from their respective subdirectories because of package declarations.
