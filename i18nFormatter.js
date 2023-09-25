const argv = require("yargs").argv
const path = require("path")
const outFilePath = path.join(process.cwd(), argv["out-file"])
const originOutObj = require(outFilePath)
const i18nConfig = require("./i18nConfig")
const languages = i18nConfig.locales
const defaultLang = i18nConfig.defaultLocale
const locale = argv["pseudo-locale"] || defaultLang

const resolvePropByPath = (obj, path) => {
    const parts = path.split(".")
    return parts.reduce((prev, curr) => prev && prev[curr], obj)
}

const putPropByPath = (obj, path, value) => {
    const parts = path.split(".")
    parts.reduce((prev, curr, i) => {
        if (!prev[curr]) {
            prev[curr] = {}
        }
        if (i === parts.length - 1) {
            prev[curr] = value
        }
        return prev[curr]
    }, obj)
}

const flattenMsgObj = (nestedMessages, prefix = "") => {
    return Object.keys(nestedMessages).reduce((messages, key) => {
        const value = nestedMessages[key]

        const prefixedKey = prefix ? `${prefix}.${key}` : key

        if (typeof value === "object" && languages.every((l) => !!value[l])) {
            messages[prefixedKey] = value
        } else {
            Object.assign(messages, flattenMsgObj(value, prefixedKey))
        }
        return messages
    }, {})
}

exports.format = function (msgs) {
    const results = { ...originOutObj }
    for (const [id, msg] of Object.entries(msgs)) {
        const originalEntry = resolvePropByPath(originOutObj, id)
        const entry = {
            _description: msg.description,
        }
        const dm =
            msg.defaultMessage ||
            `[${defaultLang}: ${id} => ${msg.defaultMessage}]`
        languages.forEach((lang) => {
            entry[lang] =
                (originalEntry && originalEntry[lang]) ||
                (lang === defaultLang
                    ? dm
                    : `[${lang}: ${id} => ${msg.defaultMessage}]`)
        })

        putPropByPath(results, id, entry)
    }

    const flattenedOriginalMessages = flattenMsgObj(originOutObj)
    Object.keys(flattenedOriginalMessages).forEach((msgId) => {
        // console.log('JO', resolvePropByPath(results, msgId))
        if (!msgs[msgId]) {
            const entry = resolvePropByPath(results, msgId)
            entry._notExtracted = true
            putPropByPath(results, msgId, entry)
        }
    })
    return results
}

exports.compile = function (msgs) {
    const results = {}
    const flattendMsgObj = flattenMsgObj(msgs)
    for (const k in flattendMsgObj) {
        results[k] = flattendMsgObj[k][locale]
    }
    return results
}
