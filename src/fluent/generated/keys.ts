import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'f6fac0b0a33d45848bae586ab7cf933f'
                    }
                    fl_learn_home_col: {
                        table: 'sp_column'
                        id: '1a7d909a90f14cc58eecaad3b01ae664'
                    }
                    fl_learn_home_container: {
                        table: 'sp_container'
                        id: '6e1da31149544b9fabf27201c54933b2'
                    }
                    fl_learn_home_row: {
                        table: 'sp_row'
                        id: 'b74271ba84024cdda43fa2917d92e71c'
                    }
                    fl_learn_home_widget_instance: {
                        table: 'sp_instance'
                        id: 'b6da0c95c89c45ba91d52fa51dba37c0'
                    }
                    fl_learn_main_menu: {
                        table: 'sp_instance_menu'
                        id: '95f0fe6784fb403c978daaaf953ee341'
                    }
                    fl_learn_menu_home: {
                        table: 'sp_rectangle_menu_item'
                        id: '80eefc2fe02f4ad884ff82360c52df7f'
                    }
                    fl_learn_portal: {
                        table: 'sp_portal'
                        id: '22aa24de2af64aac9ffc4c0664fa4cc0'
                    }
                    learning_item_read_acl: {
                        table: 'sys_security_acl'
                        id: '6e802bd3f03f4f1aa646a92d008d218c'
                    }
                    learning_item_seed: {
                        table: 'x_378497_fl_learn_learning_item'
                        id: '1815ea2c64804910a8f1bccf111ac643'
                    }
                    learning_item_seed_2: {
                        table: 'x_378497_fl_learn_learning_item'
                        id: '0584cce1f4f1410cb1de8d01ce93bebc'
                    }
                    learning_item_seed_3: {
                        table: 'x_378497_fl_learn_learning_item'
                        id: 'a5ff01fc61e8473db65e51149045af9d'
                    }
                    learning_items_widget: {
                        table: 'sp_widget'
                        id: '89253e060f984b6982c5aafa98bb53b3'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '92be1a48f7004b36963906be881dffd2'
                    }
                    'src_server_uppercase-title_ts': {
                        table: 'sys_module'
                        id: '221ad8f4c3b247beb7527172d289364a'
                    }
                    uppercase_title_br: {
                        table: 'sys_script'
                        id: 'a562e8e40e0648d0a149503e006fb83d'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '01f9b0191f0049dbade4409d28e691eb'
                        key: {
                            name: 'x_378497_fl_learn_learning_item'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '043ded8d8b474de0bead80cafad73b98'
                        key: {
                            name: 'x_378497_fl_learn_learning_item'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '153d1eb55a6c4cdd873cab01771e3526'
                        key: {
                            id: 'fl_learn_home'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '270f484dbe6d483282f80bb1cc9f86c4'
                        key: {
                            name: 'x_378497_fl_learn_learning_item'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3626f329880b4594809dfc361ae31ade'
                        key: {
                            name: 'x_378497_fl_learn_learning_item'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5e83e43c94354be6b12ddb267ff5c39a'
                        key: {
                            name: 'x_378497_fl_learn_learning_item'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8ff0ebeafa2549a29874b6eaaa87b1dc'
                        key: {
                            name: 'x_378497_fl_learn_learning_item'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9183e20b532d4ad3be6046b56fe36d36'
                        key: {
                            name: 'x_378497_fl_learn_learning_item'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a0cbe636e1694ee485d36f9e1d026dfe'
                        key: {
                            name: 'x_378497_fl_learn_learning_item'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a3b4b2e3d4dd4874852ca943ca1f037f'
                        key: {
                            name: 'x_378497_fl_learn_learning_item'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd2a61a40148540779ea29bad0a0a442a'
                        key: {
                            name: 'x_378497_fl_learn_learning_item'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd5f6e84fe6bc4d5eae00688678e0f20d'
                        key: {
                            name: 'x_378497_fl_learn_learning_item'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'e7c33f4ae6014ee5af32cc06cb3b462e'
                        key: {
                            name: 'x_378497_fl_learn_learning_item'
                        }
                    },
                ]
            }
        }
    }
}
