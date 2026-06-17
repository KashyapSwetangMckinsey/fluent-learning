import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '5afbf974214348cf83380217be5edee4'
                    }
                    learning_item_seed: {
                        table: 'x_fluent_learn_learning_item'
                        id: '5dc4357334bd4b32ab682d19474a55fe'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'c10d54a30b164c528a74c71b17e5c8bc'
                    }
                    'src_server_uppercase-title_ts': {
                        table: 'sys_module'
                        id: '4c05eb0086c346318a32fa1e4e929ee2'
                    }
                    uppercase_title_br: {
                        table: 'sys_script'
                        id: 'fac1674618154ad184b924b177e0992d'
                    }
                }
                composite: [
                    {
                        table: 'sys_db_object'
                        id: '01fb96acb1cc4ca78fd99321e72ab18c'
                        key: {
                            name: 'x_fluent_learn_learning_item'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '087e7a18bca74bb6917cde78267528f9'
                        key: {
                            name: 'x_fluent_learn_learning_item'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '20a87209eea2493c8b7c5d9a5b5a174c'
                        key: {
                            name: 'x_fluent_learn_learning_item'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '29abab93f5c34b1cbcbf111a0826ea1b'
                        key: {
                            name: 'x_fluent_learn_learning_item'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5434040cfa254130967ce7f77c9d2cc9'
                        key: {
                            name: 'x_fluent_learn_learning_item'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '83d598a424a946eaac4eb41b5146e595'
                        key: {
                            name: 'x_fluent_learn_learning_item'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9a909b3627844f6a9ddc03ef2eba8249'
                        key: {
                            name: 'x_fluent_learn_learning_item'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ae555e557a074e08b4f19a84260dc1b9'
                        key: {
                            name: 'x_fluent_learn_learning_item'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b74b6b8a89514ca8b2af2f30721bfbcb'
                        key: {
                            name: 'x_fluent_learn_learning_item'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bc1d689ade034b83944a5e1eff77c88f'
                        key: {
                            name: 'x_fluent_learn_learning_item'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e37e56eb644c4f3f90a9e90681bc1f24'
                        key: {
                            name: 'x_fluent_learn_learning_item'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f3931b6ac57c4b4793c7d42753e9ffed'
                        key: {
                            name: 'x_fluent_learn_learning_item'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
