from pathlib import Path
lines=Path('src/lib/i18n.ts').read_text(encoding='utf-8').splitlines()
for i in range(40,90):
    print(f"{i+1}: {lines[i]}")
print('---')
for i in range(220,280):
    print(f"{i+1}: {lines[i]}")
