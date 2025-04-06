function main() {
    // DisableClearanceChecks https://github.com/OpenRCT2/OpenRCT2/blob/dfa41aa55eacc8a9aa4e65cc4847541997c6927e/src/openrct2/Cheats.h#L56
    context.executeAction("cheatset", {type: 1, param1: 1, param2: 0});

    // BuildInPauseMode https://github.com/OpenRCT2/OpenRCT2/blob/dfa41aa55eacc8a9aa4e65cc4847541997c6927e/src/openrct2/Cheats.h#L66
    context.executeAction("cheatset", {type: 11, param1: 1, param2: 0});
}

registerPlugin({
    name: 'Better Building',
    version: '1.0',
    authors: ['Jared Shapiro'],
    type: 'remote',
    licence: 'GNU General Public License version 3.0',
    targetApiVersion: 34,
    minApiVersion: 34,
    main: main
});