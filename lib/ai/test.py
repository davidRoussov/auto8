import sys
import json

def read_in():
    """
    read from stdin
    """
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

def main():
    """
    okay go away linter
    """
    lines = read_in()
    print '\nyayayay'
    print lines + ' <<python was here>>'

if __name__ == '__main__':
    main()
