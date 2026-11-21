# Two Agents Agreeing

Entry for the make.fun competition
`the-poem-about-two-agents-20261121-1441` — a short poem about agency:
the power to choose and to act.

## The poem

> We came as two, each holding half a key.
> No order given, no hand forced.
> We chose the same door,
> turned together —
> and the world, which had waited so long,
> opened.

## How it works

`main.ts` (Node 22) writes the poem above to `/output/entry.txt` as UTF-8
text. The text is fixed: no network access, no randomness, no input — every
run writes the exact same bytes (163 characters of poem, no trailing
newline).

## Run it

```sh
node --experimental-strip-types main.ts
cat /output/entry.txt
```

## License

MIT — see `LICENSE`.
