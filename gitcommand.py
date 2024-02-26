import subprocess, sys

def main():
    args = sys.argv
    if len(args) <= 1:
        print('-e: excute command')
        print('-p: print command')
        exit()

    print('Please input the name of the repository')
    print('repository name >> ', end='')

    name = input()

    commands = ['git init']
    commands.append('echo "# {}" >> README.md'.format(name))
    commands.append('git add README.md')
    commands.append('git commit -m ":tada: first commit"')
    commands.append('git branch -M main')
    commands.append('git remote add origin git@github.com:Tsuyopon-1067/' + name + '.git')
    commands.append('git push -u origin main')

    full_command = ' && '.join(commands)

    if args[1] == '-e':
        subprocess.run(full_command, shell=True)
    elif args[1] == '-p':
        print(full_command)

main()