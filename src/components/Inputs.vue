<template>
    <v-container>
        <v-row>
            <v-col>
                <v-btn color="primary" block outlined @click.prevent="doRegex">Replace!</v-btn>
            </v-col>
        </v-row>
        <v-row justify="space-around">
            <v-col cols="5">
                <v-text-field
                    hint="Enter to submit"
                    clearable
                    @keypress.enter.prevent="doRegex"
                    outlined
                    label="Regex"
                    v-model="regex"
                    prefix="/"
                    :suffix="`/${flagString()}`"
                />
            </v-col>
            <v-tooltip top>
                <template v-slot:activator="{on}">
                    <v-checkbox v-on="on" v-model="flags.g" class="mx-2" label="g"></v-checkbox>
                </template>
                <span>Global</span>
            </v-tooltip>
            <v-tooltip top>
                <template v-slot:activator="{on}">
                    <v-checkbox v-on="on" v-model="flags.i" class="mx-2" label="i"></v-checkbox>
                </template>
                <span>Case-Sensitive</span>
            </v-tooltip>
            <v-col cols="5">
                <v-text-field
                    hint="Enter to submit"
                    clearable
                    @keypress.enter.prevent="doRegex"
                    outlined
                    label="Replacement"
                    v-model="replacement"
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-textarea
                    hint="Ctrl+Enter to submit"
                    @keydown.ctrl.enter.prevent="doRegex"
                    no-resize
                    auto-grow
                    clearable
                    outlined
                    label="Input"
                    v-model="input"
                />
            </v-col>
            <v-col>
                <v-textarea
                    no-resize
                    auto-grow
                    readonly
                    outlined
                    label="Output"
                    :value="output"
                    filled
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Inputs",

    data() {
        return {
            regex: "cool",
            replacement: "awesome",
            input: "This is cool.",
            output: "",
            flags: {
                g: true,
                i: false
            }
        };
    },
    methods: {
        doRegex() {
            this.output = "";
            try {
                this.output = this.input.replace(
                    new RegExp(this.regex, this.flagString()),
                    this.replacement
                );
            } catch (err) {
                this.output = "Invalid regex or replacement string!";
            }
        },
        flagString() {
            return `${this.flags.g ? "g" : ""}${this.flags.i ? "i" : ""}`;
        }
    }
};
</script>
